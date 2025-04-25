import Field from "@/components/form/Field"
import { Button } from "@/components/ui/button"
import { CardDescription } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

type FormCodeType = {
    handleChange: (value: string) => void,
    handleVerify: () => void,
    loading: boolean
    codeValue: string
}

const FormCode = ({
    handleVerify,
    handleChange,
    loading,
    codeValue
}: FormCodeType) => {

    return (
        <>
            <title>Código de verificación</title>
            <Field
                required={true}
                placeholder="Ingresa tu código de recuperación"
                name="code"
                onChange={(e) => handleChange(e.target.value)}
                value={codeValue || ""}
            >
                Código de recuperación
            </Field>

            <CardDescription>Enviamos un código de recuperación a tu correo electrónico. Ingresalo en este campo antes de que expire. Los códigos de validación tienen una duración de 5 minutos antes de expirar.</CardDescription>

            <Button className="w-full" onClick={handleVerify} disabled={loading}>
                {loading && <Loader2 className="animate-spin" />}
                Comprobar código
            </Button>
        </>
    )
}

export default FormCode
