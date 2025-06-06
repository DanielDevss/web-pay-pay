import { Link } from "react-router-dom"
import Field from "../../components/form/Field"
import { Button } from "../../components/ui/button"
import useSignIn from "@/hooks/useSignIn"
import { Loader2 } from "lucide-react"

const SignIn = () => {

  const {
    register,
    handleSubmit,
    onSubmit,
    pending
  } = useSignIn()


  return (
    <>
      <title>Inicia sesión</title>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">

        <fieldset className="flex flex-col gap-4">

          <Field
            type="email"
            placeholder="Ingresa tu correo electrónico"
            {...register("email")}
          >
            Correo electrónico
          </Field>

          <Field
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("password")}
          >
            Contraseña
          </Field>

        </fieldset>

        <fieldset className="mt-7 w-full flex flex-col gap-2">

          <Button type="submit" className="w-full" disabled={pending}>
            {pending && <Loader2 className="animate-spin" />}
            {pending ? "Comprobando..." : "Iniciar sesión"}
          </Button>

          <Button disabled={pending} type="button" variant="secondary" className="w-full" asChild>
            <Link to="/crear-cuenta">
              No tengo cuenta
            </Link>
          </Button>

          <Button type="button" variant="link" asChild>
            <Link to="/recuperar-contrasena">Olvide mi contraseña</Link>
          </Button>

        </fieldset>

      </form>
    </>
  )
}

export default SignIn
