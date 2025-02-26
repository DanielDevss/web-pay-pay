export type KeyDataType = {
    createdAt: string
    updatedAt: string
    id: string
    key: string
    name: string
    production: boolean
}

export type KeyFormType = {
    name: string
    production?: boolean
}