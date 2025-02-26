import fetching from "@/lib/fetching"
import { BankDataType } from "@/types/bank.type"
import { UserDataType } from "@/types/user.types"

export const getUser = async() => {

    const result : { data: UserDataType } | null = await fetching({
        credentials: true,
        endpoint: 'user'
    })

    return result?.data || undefined
}

export const getBankAccount = async () => {
    const result : { data : BankDataType } | null = await fetching({
        credentials: true,
        endpoint: "user/bank"
    })
    return result?.data || undefined
}