import ActionRow from "@/components/datatable/ActionRow";
import { Badge } from "@/components/ui/badge";
import { formatFullDate, formatNumberToAmount } from "@/lib/formats";
import { PaymentType } from "@/types/payments";
import { ColumnDef } from "@tanstack/react-table";
import { ListTodo } from "lucide-react";
import { Link } from "react-router-dom";

export const columns : ColumnDef<PaymentType>[] = [
    {
        header: 'Identificador',
        id: 'Identificador',
        accessorKey: 'id',
        cell: ({ row }) => <span className="font-bold">{row.original.id}</span>
    },
    {
        header: 'Estado',
        id: 'Estado',
        accessorKey: 'status',
        cell: ({ row }) => {
            const status = row.original.status.replace(/_/g, " ")
            return (
                <Badge variant={status == "canceled" ? "destructive" : "default"} className="capitalize">{status}</Badge>
            )
        }
    },
    {
        header: 'Monto',
        id: 'Monto',
        accessorKey: 'amount',
        accessorFn: ({ amount }) => formatNumberToAmount(amount)
    },
    {
        header: 'Llave usada',
        id: 'Llave usada',
        accessorKey: 'keyName',
        cell: ({ row }) => <Link className="hover:underline transition-all text-primary" to={`/llaves/${row.original.keyId}`}>{row.original.keyName}</Link>
    },
    {
        header: 'Creado el',
        id: 'Creado el',
        accessorKey: 'createdAt',
        accessorFn: ({ createdAt }) => formatFullDate(createdAt)
    },
    {
        header: 'Actualizado el',
        id: 'Actualizado el',
        accessorKey: 'updatedAt',
        accessorFn: ({ updatedAt }) => formatFullDate(updatedAt)
    },
    {
        id: 'Acciones',
        cell: ({ row }) => {
            return (
                <ActionRow>
                    <ActionRow.Link to={`/historial-de-pagos/${row.original.id}`}>
                        <ListTodo />
                        Detalles del pago
                    </ActionRow.Link>
                </ActionRow>
            )
        }
    }
]