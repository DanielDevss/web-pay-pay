import { Separator } from '@/components/ui/separator'
import { Button } from '../../components/ui/button'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '@/components/mode-toggle'

const WebHeader = () => {
    return (
        <header className='fixed w-full top-0 left-0 right-0'>
            <div className="flex justify-between items-center py-4 container mx-auto">
                <Button asChild variant="ghost">
                    <Link to="/">
                        Inicio
                    </Link>
                </Button>
                <nav className="flex space-x-2 h-5 items-center">
                    <Button asChild variant="ghost">
                        <NavLink to="/iniciar-sesion">Iniciar sesión</NavLink>
                    </Button>
                    <Button asChild variant="ghost">
                        <NavLink to="/crear-cuenta">Crear cuenta</NavLink>
                    </Button>

                    <Separator orientation='vertical' />

                    <ModeToggle />
                </nav>
            </div>
        </header>
    )
}

export default WebHeader
