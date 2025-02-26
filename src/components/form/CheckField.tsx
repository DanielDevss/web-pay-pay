import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

type CheckFieldProps = {
    children : string
    id? : string
    className?: string
} & CheckboxProps

const CheckField = ({ children, id, className, ...props } : CheckFieldProps) => {
  return (
    <Label htmlFor={id} className={`flex items-center gap-2 ${className}`}>
        <Checkbox id={id} {...props} />
        {children}
    </Label>
  )
}

export default CheckField
