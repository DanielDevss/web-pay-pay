import { Alert as AlertCn, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ElementType, ReactNode } from "react"

type AlertProps = {
    title?: string
    children: ReactNode
    icon?: ElementType
}

const Alert = ({ title, children, icon : Icon } : AlertProps) => {
    return (
        <AlertCn>
            {Icon && (
                <Icon />
            )}
            {title && (
                <AlertTitle>{title}</AlertTitle>
            )}
            <AlertDescription>{children}</AlertDescription>
        </AlertCn>
    )
}

export default Alert
