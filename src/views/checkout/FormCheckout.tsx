import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import useCheckout from "@/hooks/useCheckout"
import { Separator } from "@radix-ui/react-separator"
import { CardElement } from "@stripe/react-stripe-js"
import { Loader } from "lucide-react"

const FormCheckout = () => {

    const { handleSubmit, handleCancel, data, stripe, error, processing } = useCheckout()

    if (data?.status !== "requires_payment_method") return <div>Checkout no disponible</div>

    if (error) return <>{error}</>

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-sm">
                <CardHeader>
                    <CardTitle>
                        <h1>Checkout de compra</h1>
                    </CardTitle>
                    <CardDescription>Rellena los campos con los datos de cuenta para realizar tu pago.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="border border-border p-2 rounded">
                        <CardElement />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <Button className="w-full" disabled={!stripe}>
                        {processing && <Loader className="animate-spin" />}
                        {processing ? "Procesando pago..." : `Realizar pago ${data?.amount}`}

                    </Button>
                    <Button onClick={handleCancel} className="w-full" variant="secondary" type="button">Cancelar pago</Button>

                    <Separator className="my-2" />

                    <CardDescription className="text-xs">
                        Procesamos su pago de manera segura a través de <span className="font-bold">PayPay</span>, brindándole protección en cada transacción. Sus datos están cifrados y respaldados por una de las plataformas más confiables del mundo.
                    </CardDescription>
                </CardFooter>
            </Card>

        </form>
    )
}

export default FormCheckout
