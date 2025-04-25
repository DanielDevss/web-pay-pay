import { getData, getPaymentData } from "@/data/payments"
import { FilterTypes, PaymentDetailData, PaymentType } from "@/types/payments"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const usePayments = (filter: FilterTypes = 'all') => {

    const { id } = useParams()

    const [ payments, setPayments ] = useState<PaymentType[] | null>(null)

    const [ payment, setPayment ] = useState<PaymentDetailData | null>(null)

    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const getPayments = async () => {
            const data : PaymentType[] | null = await getData(filter)
            setPayments(data)
            setLoading(false)
        }

        const getPayment = async() => {
            if(!id) return
            const data : PaymentDetailData | null = await getPaymentData(id as string)
            console.log(data)
            setLoading(false)
            setPayment(data)
        }

        if(id) {  
            getPayment()
        }else{
            getPayments()
        }
    }, [id])

    return {
        payments,
        loading,
        payment
    }
}

export default usePayments
