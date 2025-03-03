import Field from '@/components/form/Field'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader, Save, X } from 'lucide-react'
import { FormEvent } from 'react'

type FormBankAccountType = {
    handleSubmit : (event : FormEvent<HTMLFormElement>) => void
    processing: boolean
    updating?: boolean
    onToggleUpdate: () => void
}

const FormBankAccount = ({ handleSubmit, processing, updating, onToggleUpdate } : FormBankAccountType) => {

  return (
    <form onSubmit={handleSubmit}>
        <Card>
            <CardHeader>
                <CardTitle>
                    <h2>{updating ? "Actualizar cuenta de banco" : "Agrega tu información bancaría"}</h2>
                </CardTitle>
            </CardHeader>
            <CardContent>

                <fieldset className='grid grid-cols-2 gap-4'>
                    <Field
                        required
                        name="holder_name"
                        id="holder_name"
                        placeholder='Nombre completo del propietario'
                    >
                        Propietario de la cuenta
                    </Field>

                    <Field
                        required
                        name="account_number"
                        id="account_number"
                        placeholder='El número debe tener 18 digitos'
                    >
                        Número de cuenta
                    </Field>
                </fieldset>


            </CardContent>
            <CardFooter className='flex space-x-1.5'>
                {updating && (
                    <Button onClick={onToggleUpdate} variant='destructive' type='button'><X /> Cancelar cambios</Button>
                )}
                <Button type='submit' disabled={processing}>
                    {processing ? <Loader className='animate-spin' /> : <Save />}
                    {processing ? "Guardando..." : (updating ? "Confirmar cambios" : "Guardar cuenta")}
                </Button>
            </CardFooter>
        </Card>
    </form>
  )
}

export default FormBankAccount
