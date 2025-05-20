import { Badge } from '@/components/ui/badge'
import { Check, Info } from 'lucide-react'

type BadgesEnablesProps = {
    charges_enable?: boolean
    payouts_enable?: boolean
}

const BadgesEnables = ({ charges_enable, payouts_enable } : BadgesEnablesProps) => {
    return (
        <div className="flex items-center gap-2">
            <Badge variant={charges_enable ? "secondary" : "destructive"}>
                {charges_enable
                    ? <><Check /> Cargos activos</>
                    : <><Info /> Cargos inactivos</>}
            </Badge>
            <Badge variant={payouts_enable ? "secondary" : "destructive"}>
                {payouts_enable
                    ? <><Check /> Pagos activos</>
                    : <><Info /> Pagos inactivos</>}
            </Badge>
        </div>
    )
}

export default BadgesEnables
