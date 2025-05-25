import { getKeyData, getKeysData } from "@/data/keys";
import fetching from "@/lib/fetching";
import { KeyDataType, KeyFormType } from "@/types/key.types";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const useKey = () => {

    const [keys, setKeys] = useState<KeyDataType[] | null>(null);
    const [loading, setLoading] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [openAlertDelete, setOpenAlertDelete] = useState(false)
    const [keyData, setKeyData] = useState<KeyDataType | null>(null)

    // region Obtener el ID

    const { id } = useParams()

    // Actualizar Table
    const updateTable = async () => {
        const data = await getKeysData()
        setKeys(data)
    }

    // region Acciones del dialog

    const handleOpenCreate = () => {
        setKeyData(null)
        setOpenDialog(true)
    }

    const handleOpenUpdate = (data: KeyDataType) => {
        setKeyData(data)
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
        setKeyData(null)
    }

    // region Acciones para eliminar llave

    const handleOpenAlertDelete = (data: KeyDataType) => {
        setKeyData(data)
        setOpenAlertDelete(true)
    }

    const handleCloseAlertDelete = () => {
        setKeyData(null)
        setOpenAlertDelete(false)
    }

    // region Envios de peticiones

    // Crear una clave
    const handleCreate = async (data: KeyFormType) => {
        setProcessing(true)
        await fetching({
            endpoint: "keys",
            credentials: true,
            method: "POST",
            data: { ...data, production: false },
            onSuccess: async () => {
                updateTable()
                setOpenDialog(false)
            }
        })
        setProcessing(false)
    }

    // Actualizar una clave
    const handleUpdate = async (data: KeyFormType) => {
        await fetching({
            endpoint: `keys/${keyData?.id}`,
            credentials: true,
            data: { ...data, production: false },
            method: "PUT",
            onSuccess: (response: { message?: string }) => {
                updateTable()
                setOpenDialog(false)
                setKeyData(null)
                if(response.message) {
                    toast(response.message)
                }
            }
        })
    }

    // Eliminar una llave
    const handleDelete = async () => {
        if (!keyData) {
            return toast("No se encontro una llave para eliminar")
        }
        await fetching({
            endpoint: `keys/${keyData?.id}`,
            credentials: true,
            method: "DELETE",
            onSuccess: async (response: { message?: string }) => {
                updateTable()
                if (response?.message) {
                    toast(response.message)
                }
            },
            onError(error) {
                toast.error((error as Error).message)
            },
        })
    }

    // region Carga de datos

    // Cargar lista de llaves
    useEffect(() => {
        const getKeys = async () => {
            const data = await getKeysData()
            setKeys(data)
            setLoading(false)
        }

        getKeys()
    }, [])

    // Cargar datos de llave
    useEffect(() => {
        const getKey = async() => {
            if(id) {
                const data = await getKeyData(id)
                setKeyData(data)
                setLoading(false)
            }
        }
        
        getKey()
    }, [id])

    return {
        keys,
        loading,
        processing,
        handleOpenCreate,
        handleOpenUpdate,
        handleCloseDialog,
        handleOpenAlertDelete,
        handleCloseAlertDelete,
        handleCreate,
        handleUpdate,
        handleDelete,
        openDialog,
        openAlertDelete,
        keyData,
    }
}

export default useKey
