import { getPasswordResetData } from "@/data/password"
import fetching from "@/lib/fetching"
import { DataReset, ResponsePasswordGetCode, ResponseUpdatePassword } from "@/types/password.type"
import { FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"


const useForgotPassword = () => {

    // region Hooks

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")

    const navigate = useNavigate()
    const { id } = useParams()

    // region Obtener data

    const [pending, setPending] = useState(true)
    const [data, setData] = useState<DataReset | null>(null)

    const getData = async () => {
        if (!id) return
        setPending(true)
        const data = await getPasswordResetData(id as string)
        setData(data)
        setPending(false)
    }

    // region Solicitar código

    const handleChangeEmail = (email: string) => setEmail(email)

    const handleGetCode = async (e: FormEvent) => {

        e.preventDefault()

        setLoading(true)

        await fetching<ResponsePasswordGetCode>({
            endpoint: "password/getcode",
            method: "POST",
            credentials: false,
            data: { email },
            onFinish: (result) => {
                if (result?.success && result.data?.id) {
                    navigate(`/recuperar-contrasena/${result.data.id}`)
                } else {
                    result?.error?.forEach(err => {
                        toast.error(err.message)
                    });
                    toast.info(result?.message)
                }

                setLoading(false)
            }
        })
    }

    // region Verificar código

    const [code, setCode] = useState("")

    const handleChangeCode = (value: string) => setCode(value)

    const handleVerified = async() => {
        setLoading(true)
        const result = await fetching({
            method: "POST",
            endpoint: "password/verify",
            data: {
                id: data?.id,
                code
            },
            onFinish: async() => {
                await getData()
                setLoading(false)
            }
        })
        console.log(result)
    }

    // region Actualizar contraseña

    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const handleChangePassword = (value: string, confirm: boolean) => {
        if(confirm) setConfirmPassword(value)
        else setPassword(value)
    }

    const handleUpdatePassword = async() => {

        const payload = {
            id,
            password,
            confirmPassword
        }

        setLoading(true)

        await fetching<ResponseUpdatePassword>({
            endpoint: "password/change-not-session",
            method: "POST",
            data: payload,
            onFinish:(result) => {
                if(result?.success) {
                    toast.success(result.message)
                    navigate("/iniciar-sesion")
                }
                else{
                    if(result?.error) {
                        result.error.forEach(err => {
                            toast.warning(err.message)
                        })
                        toast.error(result.message)
                    }
                }
            }
        })

        setLoading(false)

    }

    // region useEffects

    useEffect(() => {
        const getData = async () => {
            if (!id) return
            setPending(true)
            const data = await getPasswordResetData(id as string)
            setData(data)
            setPending(false)
        }

        getData()
    }, [id])

    return {
        loading,
        handleGetCode,
        handleChangeEmail,

        handleChangeCode,
        handleVerified,
        code,

        handleChangePassword,
        handleUpdatePassword,
        password,
        confirmPassword,

        pending,
        data
    }
}

export default useForgotPassword