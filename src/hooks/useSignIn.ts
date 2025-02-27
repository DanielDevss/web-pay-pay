import fetching from "@/lib/fetching"
import { InputsAuthType } from "@/types/user.types"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const useSignIn = () => {

    const { register, handleSubmit } = useForm<InputsAuthType>()

    const [ pending, setPending ] = useState(false)

    const navigate = useNavigate()

    const onSubmit = async(data : InputsAuthType) => {
        setPending(true)
        await fetching({
            method: "POST",
            endpoint: "auth",
            data,
            credentials: true,
            onFinish: (response : { message: string } | null) => {
              if(response?.message) {
                toast.message(response.message)
              }
              setPending(false)
            },
            onSuccess: () => {
              navigate("/administrador")
            },
            onError: (error) => {
              console.log(error)
            }
        })

    }

  return {
    handleSubmit,
    onSubmit,
    register,
    pending,
  }
}

export default useSignIn
