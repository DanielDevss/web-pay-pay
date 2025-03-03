export type PaymentType = {
    id: string
    amount: number
    status: string
    keyName?: string
    keyId?: string
    createdAt: string
    updatedAt: string
}

export type PaymentResponseType = {
    message?: string,
    data?: PaymentType[]
}