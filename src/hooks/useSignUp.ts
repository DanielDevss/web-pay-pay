import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { InputsCreateUserType } from "@/types/user.types"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import fetching from "@/lib/fetching"

const useSignUp = () => {

    const [ pending, setPending ] = useState<boolean>(false)
    const { register, formState: { errors }, handleSubmit } = useForm<InputsCreateUserType>()

    const navigate = useNavigate()

    // Toggle de visualización de contraseña
    const [ showPasswords, setShowPasswords ] = useState<boolean>(false)
    const handleTogglePasswords = (checked : boolean) => setShowPasswords(checked)

    // Aceptar los terminos y condiciones
    const [ acceptTerms, setAcceptTerms ] = useState<boolean>(false)
    const handleAcceptTerms = (checked: boolean) => setAcceptTerms(checked)

    // Envio del formulario
    const onSubmit : SubmitHandler<InputsCreateUserType> = async (data ) => {

        // Validación de terminos y condiciones
        if(!acceptTerms) return toast.warning("Acepta los términos y condiciones.")

        setPending(true)

        await fetching({
            method: "POST",
            endpoint: "user",
            data: data,
            onSuccess: () => navigate("/iniciar-sesion"),
            onFinish: (response : { message: string } | null) => {
                if(response?.message) {
                    toast(response.message)
                }
                setPending(false)
            }
        })

    }

    return {
        register,
        errors,
        onSubmit,
        handleSubmit,
        pending,
        handleTogglePasswords,
        showPasswords,
        handleAcceptTerms,
        acceptTerms,
    }
}

export default useSignUp
