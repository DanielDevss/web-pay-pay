export type InputsCreateUserType = {
    firstName : string
    lastName : string
    email : string
    phone : string
    password : string
    rfc: string
    confirmPassword : string
}

export type companyAddressType = {
    city: string
    address: string
    postalCode: string
    state: string
    web_url: string
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
    address: companyAddressType
}

export type ChargeEnabledBodyType = {
    address: Omit<companyAddressType, "web_url"> & { country: string },
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
    dob: string
}& companyAddressType