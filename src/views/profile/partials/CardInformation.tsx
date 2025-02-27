import Field from "@/components/form/Field"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputsUpdateUserType, UserDataType } from "@/types/user.types"
import { RefreshCcwDot } from "lucide-react"
import { FormEvent } from "react"
import { useForm } from "react-hook-form"

type CardInformationProps = {
  userData?: UserDataType,
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  processing: boolean
}

const CardInformation = ({ userData, handleSubmit, processing }: CardInformationProps) => {

  const { register } = useForm<InputsUpdateUserType>({
    defaultValues: {
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      email: userData?.email,
      phone: userData?.phone,
      rfc: userData?.rfc
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>Datos personales</h1>
          </CardTitle>
          <CardDescription>Información personal registrada, puedes actualizar tus datos cuando desees.</CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-x-4 gap-y-6">

          <Field
            required
            placeholder="Ingresa tus nombres"
            id="firstName"
            defaultValue={userData?.firstName}
            {...register("firstName")}
            >
            Nombres
          </Field>

          <Field
            required
            placeholder="Ingresa tus apellidos"
            id="lastName"
            defaultValue={userData?.lastName}
            {...register("lastName")}
            >
            Apellidos
          </Field>

          <Field
            required
            placeholder="Ingresa tus apellidos"
            id="email"
            type="email"
            defaultValue={userData?.email}
            {...register("email")}
            className="col-span-2"
            >
            Correo electrónico
          </Field>

          <Field
            required
            placeholder="Ingresa tus apellidos"
            id="phone"
            type="tel"
            defaultValue={userData?.phone}
            {...register("phone")}
            >
            Número de teléfono
          </Field>

          <Field
            required
            placeholder="Ingresa tu RFC"
            id="rfc"
            defaultValue={userData?.rfc}
            {...register("rfc")}
          >
            RFC
          </Field>

        </CardContent>

        <CardFooter className="flex items-center gap-2 justify-end">
          <Button type="submit" disabled={processing}>
            <RefreshCcwDot className={`${processing ? "animate-spin" : ""}`} />
            {processing ? "Actualizando información..." : "Actualizar información"}
          </Button>
        </CardFooter>

      </Card>
    </form>
  )
}

export default CardInformation
