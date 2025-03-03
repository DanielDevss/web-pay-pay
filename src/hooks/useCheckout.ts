import { getCheckout } from "@/data/checkout"
import fetching from "@/lib/fetching"
import { CheckoutDataType } from "@/types/checkout.type"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeCardElement } from "@stripe/stripe-js"
import { FormEvent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const useCheckout = () => {

    // region Hooks
    const { id } = useParams()

    const [data, setData] = useState<CheckoutDataType | null>(null)
    const [loading, setLoading] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false);

    // Kooks de stripe
    const stripe = useStripe()
    const elements = useElements()

    // region Evento de Submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!stripe || !elements) return;

        setError(null) // Formateamos a nulo
        setProcessing(true) // Comenzamos el proceso d carga

        // Obtener tarjeta
        const cardElement = elements.getElement(CardElement)

        // Creamos un payment Method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement as StripeCardElement
        })

        // Actualizar el paymentIntent
        const resultUpdatedPaymentIntent: { data: { clientSecret: string }, success: boolean, message: string } | null = await fetching({
            method: 'PATCH',
            endpoint: `checkout/${id}`,
            data: { paymentMethod: paymentMethod?.id }
        })

        console.log(resultUpdatedPaymentIntent)

        // En caso de que no se actualice
        if (!resultUpdatedPaymentIntent?.success) {
            setProcessing(false)
            setError(resultUpdatedPaymentIntent?.message || null)
            return
        }

        // Asegúrate de extraer el `clientSecret` correctamente
        const clientSecret = resultUpdatedPaymentIntent?.data?.clientSecret;

        if (!clientSecret) {
            setProcessing(false);
            setError("No se ha recibido el clientSecret.");
            return;
        }


        // Confirmar el pago
        const { error: confirmError } = await stripe.confirmCardPayment(clientSecret)

        // Verificamos que no haya errores
        if (confirmError) {
            setError(error?.message || null)
            setProcessing(false)
            return
        }

        // Actualizar la base de datos
        const resultUpdateDbPayemntStatus : { status: number } | null = await fetching({
            method: 'PATCH',
            endpoint: `checkout/status/${id}`
        })

        if(resultUpdateDbPayemntStatus?.status == 200) {
            window.location.href = data!.successUrl!
        }else{
            setError("Ocurrio un error en el proceso. Verifica con soporte para saber más de tu transacción.")  
            setSuccess(false)
            return
        }
        
        setSuccess(true)
    }

    // region Evento de cancelar
    const handleCancel = async() => {
        const result : { status: number, message: string } | null = await fetching({
            method: 'DELETE',
            endpoint: `checkout/${id}`
        })
        if(result?.status == 200) {
            window.location.href = data!.cancelUrl!
        }else{
            setError(result?.message|| null)
        }
    }

    // region Obtener Payment
    useEffect(() => {
        const getData = async () => {
            if (id) {
                const data: CheckoutDataType | null | undefined = await getCheckout(id)
                setData(data || null)
            } else {
                setData(null)
            }
            setLoading(false)
        }

        getData()
    }, [id])

    // region Retornar datos
    return {
        data,
        processing,
        error,
        success,
        loading,
        handleSubmit,
        handleCancel,
        stripe,
    }
}

export default useCheckout