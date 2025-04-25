import PaymentsPendings from "@/components/widgets/PaymentsPendings"
import Stats from "@/components/widgets/Stats"
import useDocumentTitle from "@/hooks/useDocumentTitle"

const DashboardHome = () => {

  useDocumentTitle('Panel de administración')

  return (
    <div className="flex flex-col gap-4">

      {/* Stats */}
      <Stats />

      {/* Pagos realizados recientemente */}
      <PaymentsPendings />

    </div>
  )
}

export default DashboardHome
