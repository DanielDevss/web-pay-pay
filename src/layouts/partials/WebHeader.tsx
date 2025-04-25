import { Separator } from '@/components/ui/separator'
import { Button } from '../../components/ui/button'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '@/components/mode-toggle'
import { Book } from 'lucide-react'

const WebHeader = () => {
    return (
        <header className='w-full px-4 border-b'>
            <div className="flex justify-between items-center py-4 container mx-auto">
                <nav>
                    <Button asChild variant="ghost">
                        <NavLink to="/">
                            <Book /> Documentación
                        </NavLink>
                    </Button>
                </nav>

                <nav className="flex space-x-2 h-5 items-center">

                    <Button asChild variant="ghost">
                        <NavLink to="/iniciar-sesion">Iniciar sesión</NavLink>
                    </Button>
                    <Button asChild variant="ghost">
                        <NavLink to="/crear-cuenta">Crear cuenta</NavLink>
                    </Button>

                    {/* Separador */}
                    <Separator orientation='vertical' />

                    {/* Iconos de acciones */}
                    <ModeToggle />
                </nav>
            </div>
        </header>
    )
}

export default WebHeader
