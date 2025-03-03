import { Link } from "react-router-dom"
import CheckField from "../../components/form/CheckField"
import Field from "../../components/form/Field"
import { Button } from "../../components/ui/button"
import { CardDescription } from "../../components/ui/card"
import useSignUp from "../../hooks/useSignUp"
import useDocumentTitle from "@/hooks/useDocumentTitle"

const SignUp = () => {

  useDocumentTitle('Crear una cuenta')

  const { register, handleSubmit, onSubmit, pending, showPasswords, handleTogglePasswords, handleAcceptTerms } = useSignUp()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg">
      <fieldset className="grid grid-cols-2 gap-x-4 gap-y-5">

        <Field
          {...register("firstName")}
          required
          placeholder="Ingresa tus nombres"
          id="firstName"
        >
          Nombres
        </Field>

        <Field
          {...register("lastName")}
          required
          placeholder="Ingresa tus apellidos"
          id="lastName"
        >
          Apellidos
        </Field>

        <Field
          {...register("email")}
          className="col-span-2"
          type="email"
          id="email"
          placeholder="Ingresa tu correo electrónico"
        >
          Correo electrónico
        </Field>

        <Field
          {...register("phone")}
          type="tel"
          id="phone"
          placeholder="Ingresa tu número de teléfono"
        >
          Número de teléfono
        </Field>

        <Field
          {...register("rfc")}
          id="rfc"
          placeholder="Ingresa tu RFC"
        >
          Ingresa tu RFC
        </Field>

        <div className="col-span-2">
          <CheckField
            onCheckedChange={handleTogglePasswords}
          >
            Mostrar contraseñas.
          </CheckField>

        </div>

        <Field
          type={showPasswords ? "text" : "password"}
          {...register("password")}
          required
          placeholder="Ingresa una contraseña segura"
          id="password"
        >
          Contraseña
        </Field>

        <Field
          type={showPasswords ? "text" : "password"}
          {...register("confirmPassword")}
          required
          placeholder="Confirma tu contraseña"
          id="confirmPassword"
        >
          Confirmar contraseña
        </Field>

        <div className="col-span-2">
          <CardDescription>
            La contraseña deberá tener por lo menos 8 carácteres. Mescla números y simbolos para volverla más segura.
          </CardDescription>
        </div>
      </fieldset>

      <div className="mt-6">
        <CheckField
          onCheckedChange={handleAcceptTerms}
        >
          Acepto los términos y condiciones.
        </CheckField>
      </div>

      <fieldset className="flex flex-col gap-2 mt-6">

        <Button
          disabled={pending}
        >
          {pending ? 'Cargando...' : 'Crear cuenta'}
        </Button>

        <Button
          variant="secondary"
          disabled={pending}
          asChild
        >
          <Link to="/iniciar-sesion">
            Ya tengo una cuenta
          </Link>
        </Button>

      </fieldset>

    </form>
  )
}

export default SignUp
