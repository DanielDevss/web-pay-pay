import { InputHTMLAttributes, ReactNode } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

type FieldProps = {
    children? : ReactNode
    id? : string
    className?: string
    required?: boolean
    error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Field = ({ children, required, id, className, error, ...props } : FieldProps) => {
  return (
    <div className={className}>
        {children && (
            <Label htmlFor={id}>{children} {required && <span className="text-red-500">*</span>}</Label>
        )}
        <Input id={id} {...props} />
        {error && <small className="text-red-500 text-xs">{error}</small>}
    </div>
  )
}

export default Field
