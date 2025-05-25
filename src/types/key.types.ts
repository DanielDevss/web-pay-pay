import { PaymentType } from "./payments"

export type KeyDataType = {
    createdAt: string
    updatedAt: string
    id: string
    key: string
    name: string
    production: boolean
    payments?: PaymentType[]
}

export type KeyFormType = {
    name: string
    production?: boolean
}