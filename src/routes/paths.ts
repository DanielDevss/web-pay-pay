import { Flame, History, Key, LayoutPanelTop, ShieldAlert, UserRoundCog, Users } from "lucide-react";

export const paths = [
    {
        label: "Navegación",
        childs: [
            {
                label: "Panel principal",
                path: "/administrador/",
                icon: LayoutPanelTop
            },
            {
                label: "Historial de pagos",
                path: "/administrador/historial-de-pagos",
                icon: History
            },
        ],
    },
    {
        label: "Catálogos",
        childs: [
            {
                label: "Clientes",
                path: "/administrador/historial-de-pagos",
                icon: Users
            },
        ],
    },
    {
        label: "Desarrollador",
        childs: [
            {
                label: "Api Keys",
                path: "/administrador/llaves",
                icon: Key
            },
            {
                label: "Registros de errores",
                path: "/administrador/llaves",
                icon: Flame
            },
        ],
    },
    {
        label: "Ajustes",
        childs: [
            {
                label: "Configuración de cuenta",
                path: "/administrador/perfil",
                icon: UserRoundCog
            },
            {
                label: "Dispositivos",
                path: "/administrador/perfil",
                icon: ShieldAlert
            },
        ]
    }
]