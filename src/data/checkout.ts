import fetching from "@/lib/fetching"
import { CheckoutResponseType } from "@/types/checkout.type"

export const getCheckout = async(id : string) => {
    try {
        const result : CheckoutResponseType | null = await fetching({
            endpoint: `checkout/${id}`,
            
        })
        return result?.data
    } catch (error) {
        console.log(error)
        return null
    }
}