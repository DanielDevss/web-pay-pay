import { DataTable } from "@/components/datatable/DataTable"
import Loading from "@/components/Loading"
import { columns } from "@/components/pages/payments/columns"
import useDocumentTitle from "@/hooks/useDocumentTitle"
import usePayments from "@/hooks/usePayments"

const Payments = () => {

  const { payments, loading } = usePayments()

  useDocumentTitle("Historial de pagos");
  
  if (loading) return <Loading />

  return (
    <>
      <DataTable
        columns={columns}
        data={payments || []}
      />
    </>
  )
}

export default Payments
