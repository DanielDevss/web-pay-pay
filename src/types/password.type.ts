import { FieldValidation } from "./validation.type"

export type ResponsePasswordGetCode = {
    success: boolean
    message: string
    data?: {
        id: string
    },
    error: { field: string, message:string }[]
}

export type DataReset = {
    id: string
    fullname: string
    email: string
    isConfirmed: boolean
}

export type ResponseDataResetT = {
    success: boolean
    message: string
    data?: DataReset
}

export type BodyUpdatePasswordNotSession = {
    id: string
    password: string
    confirmPassword: string
}

export type ResponseUpdatePassword = {
    success: boolean
    message: string
    error?: FieldValidation[]
}