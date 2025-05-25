import fetching from "@/lib/fetching"
import { DeviceType } from "@/types/devices"

export const getData = async(): Promise<DeviceType[]> => {
    
    const result: { data : DeviceType[]} | null = await fetching({
        endpoint: 'devices',
        credentials: true
    })

    return result?.data || []
}