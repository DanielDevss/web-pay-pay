import { DataTable } from "@/components/datatable/DataTable"
import Header from "@/components/Header"
import Loading from "@/components/Loading"
import { columns } from "@/components/pages/payments/columns"
import useKey from "@/hooks/useKey"

export default function KeyShow() {
    const { keyData, loading } = useKey()

    if(loading) {
        return <Loading />
    }

    return (
        <article>

            <Header
                title={`Pagos del proyecto`}
                text={`Nombre de proyecto: ${keyData?.name}`}
            />

            <DataTable
                placeholder='Buscar pago . . .'
                data={keyData?.payments || []}
                columns={columns}
            />
        </article>
    )
}