import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Logo from "@/assets/images/moneypay-isotipo.png"
import { Link, NavLink } from "react-router-dom"
import { paths } from "@/routes/paths"

const DashboardSidebar = () => {
  return (
    <Sidebar>
        <SidebarHeader>
            <Link to="/administrador">
                <img className="w-2/3 py-3 mx-auto object-contain" src={Logo} alt="Logotipo del sistema" />
            </Link>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Navegación
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {paths.map((path, key) => (
                            <SidebarMenuItem key={key}>
                                <SidebarMenuButton asChild>
                                    <NavLink to={path.path}>
                                        <path.icon />
                                        {path.label}
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}

export default DashboardSidebar
