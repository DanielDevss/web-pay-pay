
import { MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu"

/* -------------------------------------------------------------------------- */
/*                                    Boton                                   */
/* -------------------------------------------------------------------------- */

type ActionRowButtonProps = {
    children: ReactNode
} & DropdownMenuItemProps

const RowButton = ({ children, ...props } : ActionRowButtonProps) => {
    return (
        <DropdownMenuItem {...props}>
            {children}
        </DropdownMenuItem>
    )
}

/* -------------------------------------------------------------------------- */
/*                                    Links                                   */
/* -------------------------------------------------------------------------- */

type ActionRowLinkProps = {
    to : string
    children: ReactNode
}

const RowLink = ({ to, children } : ActionRowLinkProps) => {
    return (
        <DropdownMenuItem asChild>
            <Link to={to}>
                {children}
            </Link>
        </DropdownMenuItem>
    )
}

/* -------------------------------------------------------------------------- */
/*                                 Contenedor                                 */
/* -------------------------------------------------------------------------- */

type ActionRowProps = {
    children: ReactNode
}

const ActionRow = ({ children } : ActionRowProps) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
                <MoreVertical />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
                {children}
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Exportar                                  */
/* -------------------------------------------------------------------------- */

ActionRow.Button = RowButton;
ActionRow.Link = RowLink;

export default ActionRow
