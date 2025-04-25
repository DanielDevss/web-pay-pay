export const validationBodyRequest = `{
    "success": false, // respuesta fallida
    "message": "Failed fields", // tipo de error
    "code": 422, // codigo de error
    "validation": [
        {
            "field": "amount",
            "message": "Required"
        },
        {
            "field": "successUrl",
            "message": "Required"
        },
        {
            "field": "cancelUrl",
            "message": "Required"
        }
    ] // Validaciones necesarias
}
`