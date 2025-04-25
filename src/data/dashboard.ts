import fetching from "@/lib/fetching"
import { BalanceResponseData } from "@/types/dashboard";

export const getBalanceData = async () => {
    const result : { data: BalanceResponseData } | null = await fetching({
        endpoint: 'balances',
        credentials: true,
    });

    return result?.data
}