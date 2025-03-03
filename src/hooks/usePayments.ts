import { getData } from "@/data/payments"
import { PaymentType } from "@/types/payments"
import { useEffect, useState } from "react"

const usePayments = () => {

    const [ payments, setPayments ] = useState<PaymentType[] | null>(null)

    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const getPayments = async () => {
            const data : PaymentType[] | null = await getData()
            setPayments(data)
            setLoading(false)
        }
        getPayments()
    }, [])

    return {
        payments,
        loading
    }
}

export default usePayments
