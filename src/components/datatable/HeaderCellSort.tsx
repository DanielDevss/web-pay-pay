import { Column } from '@tanstack/react-table'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-react'

type HeaderCellSortProps <TData> = {
    column : Column<TData, unknown>
    label: string
}

const HeaderCellSort = <TData,> ({ column, label } : HeaderCellSortProps<TData>) => {
    return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            {label}
            <ArrowUpDown className="h-4 w-4" />
        </Button>
    )
}

export default HeaderCellSort
