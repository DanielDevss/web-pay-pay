import { DataTable } from "@/components/datatable/DataTable"
import Loading from "@/components/Loading"
import { columns } from "@/components/pages/payments/columns"
import usePayments from "@/hooks/usePayments"

const Payments = () => {

  const { payments, loading } = usePayments()

  if (loading) return <Loading />

  return (
    <>
      <title>Registros de pagos</title>
      
      <DataTable
        columns={columns}
        data={payments || []}
      />
    </>
  )
}

export default Payments
