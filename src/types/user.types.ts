export type InputsCreateUserType = {
    firstName : string
    lastName : string
    email : string
    phone : string
    password : string
    rfc: string
    confirmPassword : string
}

export type InputsUpdateUserType = {
    firstName : string
    lastName : string
    email : string
    phone : string
    rfc: string
}

export type InputsAuthType = {
    email : string
    password : string
}

export type UserDataType = {
    charges_enabled : boolean
    payouts_enabled : boolean
    documentsSent: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    rfc: string
    status: string
    username: string
}

export type ChargeEnabledBodyType = {
    address: {
        address: string
        postalCode: number
        state: string
        city: string
        country: string
    }
    dob: {
        day: number
        month: number
        year: number
    },
    business: {
        url: string
    }
}


export type ChargeEnabledFormType = {
    address: string,
    state: string,
    city: string,
    postalCode: string,
    dob: string
    web_url: string
}