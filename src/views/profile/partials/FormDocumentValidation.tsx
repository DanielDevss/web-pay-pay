import Field from "@/components/form/Field"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserDataType } from "@/types/user.types"
import { AlertCircle, Loader, Upload } from "lucide-react"
import { ChangeEvent, FormEvent} from "react"

type FormDocumentValidationProps = {
    userData?: UserDataType,
    handleChangeFile: (event : ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
    processing: boolean
}

const FormDocumentValidation = ({ userData, handleChangeFile, handleSubmit, processing }: FormDocumentValidationProps) => {

    if (userData?.documentsSent) return

    return (
        <>
            {/* Alerta */}
            <Alert>
                <AlertCircle />
                <AlertTitle>Documentos de indentificación faltantes</AlertTitle>
                <AlertDescription>
                    Tu cuenta no se encuentra completa. Ingresa tus documentos de identificación para poder validar tu cuenta. Ingresa el frente y reverso por medio de una foto de tu identificación (INE), para poder validar tus datos.
                </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <h3>Envianos tu identificación</h3>
                        </CardTitle>
                        <CardDescription>
                            Es importante que nos envies el reverso y frente de tu identificación para poder validar tu cuenta. Tus datos están protegidos.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="gap-3 w-full flex items-center">
                        <Field onChange={handleChangeFile} className="flex-1" required name="front" type="file">Frente</Field>
                        <Field onChange={handleChangeFile} className="flex-1" required name="back" type="file">Reverso</Field>
                    </CardContent>

                    <CardFooter>
                        <Button disabled={processing}>
                            {processing ? <Loader className="animate-spin" /> : <Upload />}
                            {processing ? "Enviando..." : "Enviar datos"}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </>
    )
}

export default FormDocumentValidation
