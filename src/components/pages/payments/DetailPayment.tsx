import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatFullDate, formatNumberToAmount } from "@/lib/formats"
import { PaymentDetailData } from "@/types/payments"

type DetailPaymentProps = {
    payment: PaymentDetailData
}

const DetailPayment = ({ payment }: DetailPaymentProps) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Detalles del pago</CardTitle>
                    <CardDescription>La venta se realizo con la siguiente información</CardDescription>
                </CardHeader>

                <CardContent>
                    <Table className="mb-4">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold" colSpan={2}>Detalles de pago</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableHead>Monto pagado</TableHead>
                                <TableCell className="text-end">{formatNumberToAmount(payment.amount)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Estado de venta</TableHead>
                                <TableCell className="text-end">{payment.status}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Fecha de creación</TableHead>
                                <TableCell className="text-end">{formatFullDate(payment.createdAt)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Ult. Actualización</TableHead>
                                <TableCell className="text-end">{formatFullDate(payment.updatedAt)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold" colSpan={2}>Redirecciones de la venta</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableHead>Completado</TableHead>
                                <TableCell className="text-end">{payment.successUrl}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Cancelado</TableHead>
                                <TableCell className="text-end">{payment.cancelUrl}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default DetailPayment
