import fetching from "@/lib/fetching"
import { KeyDataType } from "@/types/key.types"

type resultKeysData = {
    data: KeyDataType[]
}

export const getKeysData = async () => {
    try {
        const result : resultKeysData | null = await fetching({
            endpoint: "keys",
            credentials: true,
        })
        return result?.data || null
        
    } catch (error) {
        console.log(`Error al recuperar keys: ${(error as Error).message}`)
        return null
    }

}
