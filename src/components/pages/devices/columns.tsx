import { DeviceType } from "@/types/devices";
import { ColumnDef } from "@tanstack/react-table";

export const getColumns = (): ColumnDef<DeviceType>[] => [
    {
        id: 'Dirección IP',
        header: () => (
            <span className="text-nowrap">Dirección IP</span>
        ),
        accessorKey: 'ip',
        enableGlobalFilter: true,
    },
    {
        id: 'Agente',
        header: 'Agente',
        accessorKey: 'userAgent',
        enableGlobalFilter: true,
        cell: ({ row }) => (
            <span className="text-wrap">{row.original.userAgent}</span>
        )
    },
    {
        id: 'Ult. Acceso',
        header: 'Ult. Inicio',
        accessorKey: 'lastLogin',
        cell: ({ row }) => (
            <span className="text-nowrap">{row.original.lastLogin}</span>
        )
    },
    {
        id: 'Primer Acceso',
        header: 'Primer Acceso',
        accessorKey: 'createdAt',
        cell: ({ row }) => (
            <span className="text-nowrap">{row.original.createdAt}</span>
        )
    }
]