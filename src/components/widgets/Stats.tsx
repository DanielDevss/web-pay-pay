import { useStats } from '@/hooks/usePanel'
import StatCard from './StatCard'
import { CheckCircle, Clock, Coins, Key } from 'lucide-react'
import { formatNumberToAmount } from '@/lib/formats'

const Stats = () => {

    const { balance, quantityKeys, quantityPayments } = useStats()

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">

            <StatCard 
                icon={CheckCircle} 
                description="Saldo disponible"
            >
                    {formatNumberToAmount(balance?.available || 0)}
            </StatCard>

            <StatCard
                icon={Clock}
                description="Saldo por liberar"
            >
                {formatNumberToAmount(balance?.pending || 0)}
            </StatCard>

            <StatCard 
                icon={Coins} 
                description="Cantidad de pagos"
            >
                {quantityPayments}
            </StatCard>

            <StatCard 
                icon={Key} 
                description="Llaves creadas"
            >
                {quantityKeys}
            </StatCard>
            
        </section>
    )
}

export default Stats
