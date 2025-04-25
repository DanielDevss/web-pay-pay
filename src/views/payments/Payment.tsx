import Loading from "@/components/Loading"
import CardMethodPayment from "@/components/pages/payments/CardMethodPayment"
import DetailPayment from "@/components/pages/payments/DetailPayment"
import usePayments from "@/hooks/usePayments"
import { Navigate } from "react-router-dom"

const Payment = () => {

  const { payment, loading } = usePayments()

  if (loading) return <Loading />

  if (!loading && !payment) {
    return <Navigate to="/administrador/error404" />
  }

  return (
    <>
      <title>Detalles del pago</title>

      <article className="grid grid-cols-5 gap-4 max-w-6xl mx-auto">
        <section className={payment?.card ? "col-span-3" : "col-span-5"}>
          <DetailPayment payment={payment!} />
        </section>
        {payment?.card && (
        <aside className="col-span-2">
          <CardMethodPayment card={payment!.card} />
        </aside>
        )}
      </article>
    </>
  )
}

export default Payment
