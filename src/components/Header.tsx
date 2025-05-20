import { ReactNode } from "react"

type HeaderProps = {
    title: string
    text?: string
    children?: ReactNode
}

// const appName = import.meta.env.VITE_APP_NAME;

export default function Header({ title, text, children }: HeaderProps) {
    return (
        <>
            <title>{title}</title>

            {children ? (
                <header className="flex items-center justify-between mb-6">
                    <section>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        {text && <p className="opacity-70">{text}</p>}
                    </section>
                    <section>{children}</section>
                </header>
            ) : (
                <header className="mb-6">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    {text && <p className="opacity-70">{text}</p>}
                </header>
            )}
        </>
    )
}