import { ModeToggle } from "@/components/mode-toggle"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { authContext } from "@/context/authContext"
import { LogOut } from "lucide-react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

const DashboardHeader = () => {

    const [ openLogout, setOpenLogout ] = useState(false)

    const { handleLogOut } = useContext(authContext)

    const handleToggleLogout = () => setOpenLogout(prev => !prev)

    return (
        <>
            <header className="items-center justify-between p-4 flex sticky top-0 border-b border-border bg-background z-10 w-full">

                <div className="h-4 flex space-x-2 items-center">
                    <SidebarTrigger />
                    <Separator orientation="vertical" />
                    <h1 className="font-medium">
                        <Link to="/administrador">Administrador</Link>
                    </h1>
                </div>

                <nav className="flex items-center space-x-1 h-4">
                    <ModeToggle />
                    <Separator orientation="vertical" />
                    <Button size="icon" variant="ghost" onClick={handleToggleLogout}>
                        <LogOut />
                    </Button>
                </nav>
            </header>

            <AlertDialog open={openLogout} onOpenChange={handleToggleLogout}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Cerrar sesión
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            La sesión se cerrar y volvera a la pantala de inicio de sesión, ¿Deseas continuar?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handleLogOut}>
                            Si, cerrar sesión
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DashboardHeader
