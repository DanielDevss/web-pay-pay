import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { formatFullDate } from "@/lib/formats";
import { KeyDataType } from "@/types/key.types";
import ActionRow from "@/components/datatable/ActionRow";
import HeaderCellSort from "@/components/datatable/HeaderCellSort";


type ColumnsProps = {
    onEdit: ( data: KeyDataType ) => void;
    onDelete: ( data: KeyDataType ) => void;
}

const KeyColumns = ({ onEdit, onDelete } : ColumnsProps) : ColumnDef<KeyDataType>[] => {
    
    return [
        {
            accessorKey: "name",
            header: "Nombre",
            id: "Nombre",
            cell: ({row}) => <span className="font-bold">{row.original.name}</span>
        },
        {
            accessorKey: "key",
            id: "Llave",
            header: "Llave",
        },
        {
            accessorKey: "production",
            id: "Modo",
            header: "Modo",
            cell: ({ row }) => <Badge>{row.original.production ? "Producción" : "Desarrollo"}</Badge>
        },
        {
            accessorKey: "createdAt",
            id: "Fecha de creación",
            accessorFn: row => formatFullDate(row.createdAt),
            header: ({column}) => <HeaderCellSort label="Fecha de creación" column={column} />
        },
        {
            accessorKey: "updatedAt",
            id: "Ult. Actualización",
            accessorFn: row => formatFullDate(row.updatedAt),
            header: ({column}) => <HeaderCellSort label="Ult. Actualización" column={column} />
           
        },
        {
            id: "Acciones",
            cell: ({ row }) => {

                const handleEdit = () => onEdit(row.original)
                const handleDelete = () => onDelete(row.original)
    
                return (
                    <ActionRow>
                        <ActionRow.Button onClick={handleEdit}>
                            <Edit />
                            Editar
                        </ActionRow.Button>
                        <ActionRow.Button onClick={handleDelete}>
                            <Trash />
                            Eliminar
                        </ActionRow.Button>
                    </ActionRow>
                )
            }
        }
    ]

}

export default KeyColumns