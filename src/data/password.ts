import fetching from "@/lib/fetching"
import { DataReset, ResponseDataResetT } from "@/types/password.type"

export const getPasswordResetData = async(id: string): Promise<DataReset | null> => {

    const result :  ResponseDataResetT | null = await fetching({
        endpoint: `password/${id}`,
    })

    if(result?.success && result?.data) {
        return result.data
    }else{
        return null
    }

}