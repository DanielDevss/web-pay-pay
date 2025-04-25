import Field from "@/components/form/Field"
import { Button } from "@/components/ui/button"
import { CardDescription } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

type FormUpdatePasswordProps = {
    handleUpdate: () => void,
    handleChange: (value: string, confirm: boolean) => void
    loading: boolean
    password: string
    confirmPassword: string
}

const FormUpdatePassword = ({ 
    confirmPassword,
    password,
    loading,
    handleChange,
    handleUpdate
 }: FormUpdatePasswordProps) => {
    return (
        <>
            <title>Ingresa tu nueva contraseña</title>

            <div className="flex flex-col gap-4">
                <Field
                    name="password"
                    type="password"
                    placeholder="Minímo 8 carácteres y máximo 16."
                    required
                    id="newPassword"
                    onChange={(e) => handleChange(e.target.value, false)}
                    value={password}
                >
                    Nueva contraseña
                </Field>
                <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Repite la contraseña para confirmar"
                    required
                    id="confirmPassword"
                    onChange={(e) => handleChange(e.target.value, true)}
                    value={confirmPassword}
                >
                    Confirmar tu contraseña
                </Field>

                <CardDescription>Recuerda escribir una contraseña segura. De está forma tu cuenta siempre estará protegida.</CardDescription>

                <Button
                    disabled={loading}
                    onClick={handleUpdate}
                >
                    {loading && <Loader2 className="animate-spin" />}
                    Actualizar contraseña
                </Button>
            </div>
        </>
    )
}

export default FormUpdatePassword
