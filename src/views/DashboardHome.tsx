import PaymentsPendings from "@/components/widgets/PaymentsPendings"
import Stats from "@/components/widgets/Stats"

const DashboardHome = () => {

  return (
    <>
      <title>Pantalla principal</title>
      <div className="flex flex-col gap-4">

        {/* Stats */}
        <Stats />

        {/* Pagos realizados recientemente */}
        <PaymentsPendings />

      </div>
    </>
  )
}

export default DashboardHome
