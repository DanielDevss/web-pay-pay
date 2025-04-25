import Field from "@/components/form/Field"
import { Button } from "@/components/ui/button"
import { CardDescription } from "@/components/ui/card"
import useForgotPassword from "@/hooks/useForgotPassword"
import { Loader2 } from "lucide-react"

const ForgotPassword = () => {

    const { handleGetCode, handleChangeEmail ,loading } = useForgotPassword()

    return (
        <>
            <title>Olvide mi contraseña</title>
            <form className="flex flex-col gap-5 max-w-xs" onSubmit={handleGetCode}>
                <Field
                    onChange={(e) => handleChangeEmail(e.target.value)}
                    required
                    placeholder="Ingresa tu correo electrónico"
                    name="email"
                >
                    Correo electrónico
                </Field>

                <CardDescription>
                    Ingresa tu cuenta de correo electrónico para enviar un código de restablecimiento.
                </CardDescription>

                <Button disabled={loading}>
                    {loading && <Loader2 className="animate-spin" />}
                    {loading
                        ? "Enviando..."
                        : "Obtener un código"
                    }
                </Button>
            </form>
        </>
    )
}

export default ForgotPassword
