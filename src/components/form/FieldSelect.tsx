import { ReactNode, useState } from "react"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { SelectProps } from "@radix-ui/react-select"

export type SelectOptionType = {
    label?: string
    value: string
}

type FieldSelectProps = {
    children?: ReactNode,
    id?: string
    name?: string
    placeholder: string
    required?: boolean
    options?: SelectOptionType[]
} & SelectProps

const FieldSelect = ({ children, id, name, placeholder, required, options, ...props }: FieldSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <div>
        {children && (
            <Label htmlFor={id}>{children} {required && <span className="text-red-500">*</span>}</Label>
        )}
        <Select onValueChange={(value) => setSelectedValue(value)} {...props}>
            <SelectTrigger id={id}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options?.map((opt, key) => (
                        <SelectItem key={key} value={opt.value}>{opt.label || opt.value}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
        {name && <input type="hidden" name={name} value={selectedValue} />}
    </div>
  )
}

export default FieldSelect
