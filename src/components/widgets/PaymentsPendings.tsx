import { ArrowRight } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Link } from "react-router-dom"
import usePayments from "@/hooks/usePayments"
import Loading from "../Loading"
import { formatFullDate, formatNumberToAmount } from "@/lib/formats"

const PaymentsPendings = () => {

  const { payments, loading } = usePayments('pendings')

  if(loading && !payments) return <Loading />

  if(!payments || payments.length == 0) {
    return <div className="text-center px-4 py-8 border rounded-2xl">¡Excelente!, no hay pagos pendientes</div>
  }

  return (
    <section className="border rounded-2xl p-2 shadow">
      <Table>
        <TableCaption>Pagos pendientes o sin finalizar</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Llave usada</TableHead>
            <TableHead className="text-end">Monto</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha de creación</TableHead>
            <TableHead>Ult. Actualización</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments?.map((pay, key) => (
            <TableRow key={key}>
              <TableCell>
                <div>
                  <h5 className="font-bold">{pay.keyName}</h5>
                  <p>{pay.keyId}</p>
                </div>
              </TableCell>
              <TableCell className="text-end">{formatNumberToAmount(pay.amount)}</TableCell>
              <TableCell><Badge>{pay.status}</Badge></TableCell>
              <TableCell>{formatFullDate(pay.createdAt)}</TableCell>
              <TableCell>{formatFullDate(pay.updatedAt)}</TableCell>
              <TableCell className="text-end">
                <Button variant={"ghost"} size={"sm"} asChild>
                  <Link to={`/administrador/historial-de-pagos/${pay.id}`}>
                    Detalles
                    <ArrowRight />
                  </Link>
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableCaption>

      </TableCaption>
    </section>
  )
}

export default PaymentsPendings
