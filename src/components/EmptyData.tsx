import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Button } from "./ui/button"

type EmptyDataType = {
    text: string
    onAction: () => void
    actionLabel? : string
}

const EmptyData = ({onAction, text, actionLabel} : EmptyDataType) => {
  return (
    <div className="max-w-2xl">
        <Alert className="mb-3">
            <AlertCircle size={20} />
            <AlertTitle>No hay información</AlertTitle>
            <AlertDescription>{text}</AlertDescription>
        </Alert>
        <Button onClick={onAction}>
            {actionLabel || "Nuevo registro"}
        </Button>
    </div>
  )
}

export default EmptyData
