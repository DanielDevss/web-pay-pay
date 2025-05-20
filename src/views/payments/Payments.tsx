import { DataTable } from "@/components/datatable/DataTable"
import Header from "@/components/Header"
import Loading from "@/components/Loading"
import { columns } from "@/components/pages/payments/columns"
import usePayments from "@/hooks/usePayments"

const Payments = () => {

  const { payments, loading } = usePayments()

  if (loading) return <Loading />

  return (
    <>
      <Header title="Historial de pagos" text="Estos son los pagos realizados dentro de la plataforma" />
      
      <DataTable
        columns={columns}
        data={payments || []}
        placeholder="Buscar pago . . ."
        textEmpty="No se han realizado pagos"
      />
    </>
  )
}

export default Payments
