import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentDetailData } from "@/types/payments"

type CardMethodPaymentProps = {
    card: PaymentDetailData["card"]
}

const CardMethodPayment = ({ card }: CardMethodPaymentProps) => {

    if (!card) return

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h3>Tarjeta usada en la compra</h3>
                </CardTitle>
            </CardHeader>
            <CardContent className="">
                <p className="text-2xl font-medium">{card.number}</p>
                <CardDescription><p>{new Intl.NumberFormat('MX', { minimumIntegerDigits: 2, maximumFractionDigits: 2 }).format(card.exp)}/{card.year}</p></CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between font-extralight">
                <p className="uppercase">{card.brand}</p>
                <p className="uppercase">{card.funding}</p>
            </CardFooter>
        </Card>
    )
}

export default CardMethodPayment
