import ActionRow from "@/components/datatable/ActionRow";
import { formatFullDate } from "@/lib/formats";
import { CustomerType } from "@/types/customers";
import { ColumnDef } from "@tanstack/react-table";
import { History } from "lucide-react";

export const getColumns = (): ColumnDef<CustomerType>[] => [
    {
        accessorKey: 'userId',
        header: 'ID',
        id: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'Nombre del cliente',
        id: 'Nombre del cliente',
        cell: ({row}) => <span className="font-bold">{row.original.name}</span>
    },
    {
        accessorKey: 'email',
        header: 'Correo electrónico',
        id: 'Correo electrónico'
    },
    {
        accessorKey: 'updatedAt',
        header: 'Ult. movimiento',
        id: 'Ult. movimiento',
        accessorFn: (row) => formatFullDate(row.updatedAt)
    },
    {
        accessorKey: 'createdAt',
        header: 'Fecha de alta',
        id: 'Fecha de alta',
        accessorFn: (row) => formatFullDate(row.createdAt)
    },
    {
        id: 'Acciones',
        cell: () => {
            return (
                <ActionRow>
                    <ActionRow.Link to="bitacora">
                        <History />
                        Bitacora
                    </ActionRow.Link>
                </ActionRow>
            )
        }
    }
];