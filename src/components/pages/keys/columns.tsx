import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import { formatFullDate } from "@/lib/formats";
import { KeyDataType } from "@/types/key.types";
import ActionRow from "@/components/datatable/ActionRow";
import HeaderCellSort from "@/components/datatable/HeaderCellSort";


type ColumnsProps = {
    onDelete: ( data: KeyDataType ) => void;
}

const KeyColumns = ({ onDelete } : ColumnsProps) : ColumnDef<KeyDataType>[] => {
    
    return [
        {
            accessorKey: "name",
            header: "Nombre de proyecto",
            id: "Nombre de proyecto",
            enableGlobalFilter: true,
            cell: ({row}) => <span className="font-bold">{row.original.name}</span>
        },
        {
            accessorKey: "key",
            id: "Api Key",
            header: "Api Key",
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

                const handleDelete = () => onDelete(row.original)
    
                return (
                    <div className="flex justify-end">
                        <ActionRow>
                            {/* <ActionRow.Button onClick={handleEdit}>
                                <Edit />
                                Editar
                            </ActionRow.Button> */}
                            <ActionRow.Button onClick={handleDelete}>
                                <Trash />
                                Eliminar
                            </ActionRow.Button>
                        </ActionRow>
                    </div>
                )
            }
        }
    ]

}

export default KeyColumns