import ActionRow from "@/components/datatable/ActionRow";
import { Badge } from "@/components/ui/badge";
import { formatFullDate, formatNumberToAmount } from "@/lib/formats";
import { PaymentType } from "@/types/payments";
import { ColumnDef } from "@tanstack/react-table";
import { CheckCircle, Clock10, ListTodo, XCircle } from "lucide-react";
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
            const status = row.original.status.replace(/_/g, " ") as keyof typeof statusIcons || "other"
            const statusIcons = {
                succeeded: CheckCircle,
                canceled: XCircle,
                other: Clock10
            }
            const colorStatus = {
                succeeded: "text-green-500",
                canceled: "text-red-500",
                other: "text-gray-500",
            }
            const Icon = statusIcons[status] || statusIcons.other
            return (
                <Badge variant={"outline"} className="capitalize">
                    <Icon className={colorStatus[status]} />
                    {status}
                </Badge>
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
        cell: ({ row }) => {
            return row.original.keyId ? <Link className="hover:underline transition-all text-primary" to={`/administrador/llaves-de-acceso/${row.original.keyId}`}>{row.original.keyName}</Link> : <span className="opacity-50">No aplica</span>
        }
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
                    <ActionRow.Link to={`/administrador/historial-de-pagos/${row.original.id}`}>
                        <ListTodo />
                        Detalles del pago
                    </ActionRow.Link>
                </ActionRow>
            )
        }
    }
]