import { ReactNode } from "react"

type StatCardProps = {
    title?: string
    children: ReactNode
    description?: string
    icon?:  React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const StatCard = ({ title, children, description, icon : Icon }: StatCardProps) => {

    return (
        <div className="border rounded-lg p-3 flex">
            <div className="flex-1">
                <h4>{title}</h4>
                <div className="text-lg">
                    {children}
                </div>
                <p className="opacity-40">{description}</p>
            </div>
            {Icon && (
                <div className="opacity-40">
                    <Icon />
                </div>
            )}
        </div>
    )
}

export default StatCard
