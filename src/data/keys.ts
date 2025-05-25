import fetching from "@/lib/fetching"
import { KeyDataType } from "@/types/key.types"

type resultKeysData = {
    data: KeyDataType[]
}

type resultKeyData = {
    data: KeyDataType
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

export const getKeyData = async (id : string) => {
    try {
        const result: resultKeyData | null = await fetching({
            endpoint: `keys/${id}`,
            credentials: true
        })
        return result?.data || null
    } catch (error) {
        console.log(`Error al recuperar key: ${(error as Error).message}`)
        return null
    }
}