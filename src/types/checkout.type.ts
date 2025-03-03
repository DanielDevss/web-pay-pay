export type CheckoutDataType = {
    clientSecret: string
    amount: string
    status: string
    successUrl: string
    cancelUrl: string
}

export type CheckoutResponseType = {
    message: string
    data: CheckoutDataType,
}