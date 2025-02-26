import { Loader2 } from "lucide-react"

const ScreenLoader = () => {
  return (
    <div className="h-screen w-screen grid place-content-center text-center">
        <Loader2 className="animate-spin mx-auto mb-4" size={40} />
    </div>
  )
}

export default ScreenLoader
