import useForgotPassword from "@/hooks/useForgotPassword"
import FormCode from "./partials/FormCode"
import Loading from "@/components/Loading"
import { User } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import FormUpdatePassword from "./partials/FormUpdatePassword"

const PasswordReset = () => {

  const { data, pending, handleChangeCode, handleVerified, code, loading, password, confirmPassword, handleChangePassword, handleUpdatePassword } = useForgotPassword()

  if (pending) return <Loading />

  if (!data) return <div className="text-center">Token no reconocido</div>

  console.log(data)

  return (
    <div className="max-w-xs">

      {/* Profile */}

      <div className="border border-accent rounded p-2 flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">{data?.fullname}</h4>
          <p className="text-sm text-muted-foreground">
            {data.email}
          </p>
        </div>

        <div className="text-accent-foreground">
          <User />
        </div>
      </div>

      <Separator className="mt-5 mb-4" />

      {/* Formulario */}

      <p className="text-red-500">{data.isConfirmed}</p>

      <div className="flex flex-col gap-4">
        {!data.isConfirmed
          ? <FormCode
            loading={loading}
            codeValue={code}
            handleChange={handleChangeCode}
            handleVerify={handleVerified}
          />
          : <FormUpdatePassword
            loading={loading}
            password={password}
            confirmPassword={confirmPassword}
            handleChange={handleChangePassword}
            handleUpdate={handleUpdatePassword}
          />
        }
      </div>
    </div>
  )
}

export default PasswordReset
