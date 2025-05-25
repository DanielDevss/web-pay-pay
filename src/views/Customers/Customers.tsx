import { DataTable } from "@/components/datatable/DataTable";
import Header from "@/components/Header";
import { getColumns } from "@/components/pages/customers/columns";

export default function Customers() {

    const columns = getColumns();

    return (
        <>
            <Header title="Clientes" text="Correos electrónicos de los clientes que han comprado desde tus sistemas" /> 

            <DataTable 
                columns={columns}
                data={[]}
                placeholder="Buscar cliente . . ."
            />
        </>
    )
}