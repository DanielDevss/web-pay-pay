import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { KeyDataType } from '@/types/key.types'

type AlertDeleteProps = {
    keyData: KeyDataType | null
    open: boolean
    onHide: () => void
    onDelete: () => void
}

const AlertDelete = ({ keyData, open, onHide, onDelete } : AlertDeleteProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onHide}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    ¿Eliminar esta llave?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    La llave <span className='font-semibold'>{keyData?.name}</span>, será eliminada de forma permanente y no podrás usarla nuevamente. ¿Seguro que deseas continuar?.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>
                    Cancelar
                </AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>
                    Confirmar y eliminar
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDelete
