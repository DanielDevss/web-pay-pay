import fetching from "@/lib/fetching"
import { FilterTypes, PaymentDetailData, PaymentResponseType } from "@/types/payments";

export const getData = async (filter : FilterTypes = 'all') => {
    const endpoints = {
        all: 'payments',
        pendings:'payments/pendings'
    }

    const endpoint = endpoints[filter]

    const result : PaymentResponseType | null = await fetching({
        endpoint,
        credentials: true
    });
    return result?.data ? result.data : null
}


export const getPaymentData = async(id : string) => {
    const result : { data:  PaymentDetailData  }| null = await fetching({
        endpoint: `payments/${id}`,
        credentials: true
    })   

    return result?.data || null
}