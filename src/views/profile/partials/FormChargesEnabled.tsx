import Field from "@/components/form/Field"
import FieldSelect from "@/components/form/FieldSelect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { statesOptions } from "@/data/countryStates"
import { companyAddressType } from "@/types/user.types"
import { ArrowRight, Loader } from "lucide-react"
import { FormEvent } from "react"

type FormChargesEnabledProps = {
    handleSubmit : (event : FormEvent<HTMLFormElement>) => void
    processing: boolean
    address: companyAddressType
}

const FormChargesEnabled = ({ handleSubmit, processing, address } : FormChargesEnabledProps) => {
    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Más información</CardTitle>
                    <CardDescription>Esta información es importante para habilitar los cargos en tu cuenta.</CardDescription>
                </CardHeader>

                <CardContent>
                    <fieldset className="grid grid-cols-2 gap-x-4 gap-y-6">
                        <Field
                            placeholder="Ingresa tu dirección de facturación."
                            required
                            defaultValue={address?.address || ""}
                            name="address"
                            id="address"
                        >
                            Dirección de facturación
                        </Field>
                        <Field
                            id="postalCode"
                            name="postalCode"
                            defaultValue={address?.postalCode || ""}
                            placeholder="Ingresa tu código postal"
                            required
                        >
                            Código postal
                        </Field>
                        <Field
                            placeholder="Ingresa el nombre de tu ciudad"
                            name="city"
                            defaultValue={address?.city || ""}
                            id="city"
                            required
                        >
                            Ciudad
                        </Field>
                        <FieldSelect
                            placeholder="Selecciona un estado"
                            name="state"
                            defaultValue={address?.state || ""}
                            id="state"
                            required
                            options={statesOptions}
                        >
                            Estado
                        </FieldSelect>
                    </fieldset>

                    <Separator className="my-6" />

                    <fieldset className="flex flex-col gap-6">
                        <Field required name="dob" id="dob" type="date">Selecciona tu fecha de nacimiento</Field>
                        <Field defaultValue={address.web_url || ""} required name="web_url" placeholder="Ingresa la dirección web de tu negocio" id="web_url" type="url">Dirección de tu web</Field>
                    </fieldset>
                </CardContent>

                <CardFooter className="flex justify-end">
                    <Button disabled={processing}>
                        {processing && <Loader className="animate-spin" />}
                        {processing ? "Enviando información..." : "Habilitar cargos"}
                        {!processing && <ArrowRight />}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default FormChargesEnabled
