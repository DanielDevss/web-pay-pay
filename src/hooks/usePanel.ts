import { getBalanceData } from "@/data/dashboard"
import { getKeysData } from "@/data/keys"
import { getData as getPayments } from "@/data/payments"
import { BalanceResponseData } from "@/types/dashboard"
import { useEffect, useState } from "react"

export const useStats = () => {

    const [ balance, setBalance ] = useState<BalanceResponseData | null>(null)
    const [ quantityKeys, setQuantityKeys ] = useState<number>(0)
    const [ quantityPayments, setQuantityPayments ] = useState<number>(0)

    useEffect(() => {

        const getQuantityPayments = async () => {
            const data = await getPayments()
            const quantity = data?.length || 0
            setQuantityPayments(quantity)
        }
        
        const getQuantityKeys = async() => {
            const data = await getKeysData()
            const quantity = data?.length || 0
            setQuantityKeys(quantity)
        }

        const getBalance = async() => {
            const data = await getBalanceData()
            console.log(data)
            setBalance(data || null)
        }

        getBalance()
        getQuantityKeys()
        getQuantityPayments()
    }, [])

    return {
        balance,
        quantityKeys,
        quantityPayments,
    }

}