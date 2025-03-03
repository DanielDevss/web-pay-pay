import fetching from "@/lib/fetching"
import { PaymentResponseType } from "@/types/payments";

export const getData = async () => {
    const result : PaymentResponseType | null = await fetching({
        endpoint: 'payments',
        credentials: true
    });
    return result?.data ? result.data : null
}