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

export type FilterTypes = 'all' | 'pendings'


export type CardDetails = {
    brand: string;
    exp: number;
    year: number;
    funding: string;
    number: string;
} | null;

export type PaymentDetailData = {
    id: string;
    userId: string;
    userKeyId: string;
    stripePaymentIntent: string;
    clientSecret: string;
    amount: number;
    status: string;
    successUrl: string;
    cancelUrl: string;
    createdAt: string;
    updatedAt: string;
    card: CardDetails;
};
