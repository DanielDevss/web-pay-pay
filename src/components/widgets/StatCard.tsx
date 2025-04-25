import { TailwindColor } from "@/types/others"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import clsx from "clsx"
import { ReactNode } from "react"

type StatCardProps = {
    title?: string
    children: ReactNode
    description?: string
    color?: TailwindColor
    icon?:  React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const StatCard = ({ title, children, description, color, icon : Icon }: StatCardProps) => {

    const colorGlass = color ? `!text-${color}-500` : ''

    return (
        <Card className={clsx(color ? `border-b-4 border-b-${color}-500 text-end` : `border-b-4 text-end`)}>
            {title && (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
            )}
            <CardContent className="flex justify-between items-center">
                {Icon && <div><Icon height={34} width={34} className={`text-${color}-500 opacity-40`} /></div>}
                <div className="flex-1">
                    <p className="text-3xl">{children}</p>
                    {description && (
                        <CardDescription className={colorGlass}>
                            {description}
                        </CardDescription>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default StatCard
