import { Loader2 } from 'lucide-react'

const Loading = () => {
  return (
    <div className="h-full w-full grid place-content-center text-center py-10 text-sm">
        <Loader2 className="animate-spin mx-auto mb-4" size={40} />
        Cargando información
    </div>
  )
}

export default Loading
