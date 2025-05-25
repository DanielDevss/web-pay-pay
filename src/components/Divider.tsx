type DividerProps = {
    text: string
}

export default function Divider({text}: DividerProps) {
    return (
        <div className="border-b border-b-muted-foreground/25 my-3">
            <p className="text-xs text-muted-foreground">{text}</p>
        </div>
    )
}