import { History, Key, UserRoundCog } from "lucide-react";

export const paths = [
    {
        label : "Llaves de acceso",
        path : "/administrador/llaves",
        icon : Key
    },
    {
        label : "Cuenta",
        path : "/administrador/perfil",
        icon : UserRoundCog
    },
    {
        label : "Historial de pagos",
        path : "/administrador/historial-de-pagos",
        icon : History
    },
]