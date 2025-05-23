import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getBankAccount, getUser } from "@/data/user";
import { toast } from "sonner";
import { ChargeEnabledBodyType, ChargeEnabledFormType, UserDataType } from "@/types/user.types";
import fetching from "@/lib/fetching";
import { BankDataType } from "@/types/bank.type";

type IdentifyState = {
  front: File | null
  back: File | null
}

type FormEventType = FormEvent<HTMLFormElement>

const useAccount = () => {

  // region Hooks

  const [userData, setUserData] = useState<UserDataType | undefined>()

  const [loading, setLoading] = useState(true);

  // Documentos de identificacion

  const [identify, setIdentify] = useState<IdentifyState>({ front: null, back: null })

  const [processingDocs, setProcessingDocs] = useState(false)

  // Cuenta bancaria

  const [bankAccount, setBankAccount] = useState<BankDataType | undefined>()

  const [processingBank, setProcessingBank] = useState(false)

  const [updatingBank, setUpdatingBank] = useState(false)

  // Cargos

  const [processingChargesEnabled, setProcessingChargesEnabled] = useState(false)

  // Actualizar profile

  const [processingUpdate, setProcessingUpdate] = useState(false)

  // region Actualizar cuenta

  const handleSubmitUpdate = async (e: FormEventType) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const objectData = Object.fromEntries(formData)
    setProcessingUpdate(true)

    await fetching({
      endpoint: "user/",
      method: "PUT",
      credentials: true,
      data: objectData,
      onSuccess: (response: { message: string } | null) => {
        if (response?.message) {
          toast.success(response.message)
        }
      }
    })

    setProcessingUpdate(false)
  }

  // region Habilitar cargos

  const handleEnabledCharges = async (e: FormEventType) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement)
    const objectData: ChargeEnabledFormType = {
      address: formData.get("address") as string,
      state: formData.get("state") as string,
      city: formData.get("city") as string,
      postalCode: formData.get("postalCode") as string,
      dob: formData.get("dob") as string,
      web_url: formData.get("web_url") as string
    };

    if (Object.values(objectData).includes("")) {
      return toast("Hacen falta campos.")
    }

    const dob = objectData.dob.split("-").map(item => parseInt(item));

    const bodyData: ChargeEnabledBodyType = {
      address: {
        address: objectData.address,
        state: objectData.state,
        city: objectData.city,
        postalCode: objectData.postalCode,
        country: "MX",
      },
      dob: {
        year: dob[0],
        month: dob[1],
        day: dob[2]
      },
      business: {
        url: objectData.web_url
      }
    }

    setProcessingChargesEnabled(true)

    await fetching({
      endpoint: "user/charges-enable",
      method: "POST",
      credentials: true,
      data: bodyData,
      onSuccess: async (response: { message: string }) => {
        toast.success(response.message);
        const userData = await getUser();
        setUserData(userData)
      },
    })

    setProcessingChargesEnabled(false)
  }

  // region Cuenta bancaria

  const handleSaveBankAccount = async (e: FormEventType) => {

    e.preventDefault()
    setProcessingBank(true)

    const formData = new FormData(e.target as HTMLFormElement);
    const objectData = Object.fromEntries(formData);

    await fetching({
      endpoint: "user/bank",
      method: updatingBank ? "PUT" : "POST",
      data: updatingBank ? objectData : { ...objectData, holder_type: "individual" },
      credentials: true,
      onSuccess: async (response: { message: string, status: number }) => {
        if (response.message) {
          toast.success(response.message)
          setBankAccount(await getBankAccount())
          const userData = await getUser();
          setUserData(userData)
        }
      },
    })

    setProcessingBank(false)
  }

  const handleToggleUpdateBank = () => setUpdatingBank(prev => !prev)

  // region Subir documentos

  const handleUploadIdentify = async (e: FormEventType) => {
    e.preventDefault()

    if (!identify.back || !identify.front) {
      toast.warning("La información que intentas enviar está incompleta.")
      return
    }

    setProcessingDocs(true)

    try {

      const formData = new FormData();
      formData.append("front", identify.front)
      formData.append("back", identify.back)

      const result = await fetch(`${import.meta.env.VITE_API_URI}user/upload-identity-files`, {
        method: "POST",
        body: formData,
        credentials: "include",
      })

      const resjson: { message?: string } = await result.json()

      if (result.status === 200) {
        toast.success(resjson.message);
        const data: UserDataType | undefined = await getUser()
        setUserData(data)
      } else {
        toast.warning(resjson.message);
      }
    } catch (error) {
      const errorMessage = (error as Error).message
      toast.error(errorMessage)
    }

    setProcessingDocs(false)
  }

  const handleFileIdentifyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (!files || files.length === 0) return

    setIdentify(prev => ({
      ...prev,
      [name]: files[0]
    }))
  }

  // region Obtener información

  useEffect(() => {
    const getBank = async () => {
      setBankAccount(await getBankAccount())
    }
    
    const getProfile = async () => {
      const data = await getUser()
      setUserData(data)
    }

    const getFullData = async() => {
      await getProfile()
      await getBank()
      setLoading(false)
    }

    getFullData()
  }, []);


  // region Retornar

  return {
    userData,
    loading,
    handleFileIdentifyChange,
    handleUploadIdentify,
    processingDocs,
    handleSaveBankAccount,
    processingBank,
    bankAccount,
    handleEnabledCharges,
    processingChargesEnabled,
    handleSubmitUpdate,
    processingUpdate,
    handleToggleUpdateBank,
    updatingBank,
  }
}

export default useAccount
