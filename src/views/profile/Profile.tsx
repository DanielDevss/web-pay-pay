import useAccount from "@/hooks/useAccount"
import CardInformation from "./partials/CardInformation"
import FormDocumentValidation from "./partials/FormDocumentValidation"
import BadgesEnables from "./partials/BadgesEnables"
import CardBankAccount from "./partials/CardBankAccount"
import FormChargesEnabled from "./partials/FormChargesEnabled"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Landmark, User } from "lucide-react"
import Loading from "@/components/Loading"
import useDocumentTitle from "@/hooks/useDocumentTitle"

const Profile = () => {

  const {
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
    updatingBank
  } = useAccount()

  useDocumentTitle("Perfil")

  if(loading) return <Loading />

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4">
      <BadgesEnables
      charges_enable={userData?.charges_enabled}
        payouts_enable={userData?.payouts_enabled}
      />

      <FormDocumentValidation
        processing={processingDocs}
        userData={userData}
        handleSubmit={handleUploadIdentify}
        handleChangeFile={handleFileIdentifyChange}
      />

      <Tabs defaultValue="main">
        <TabsList className="space-x-2.5">
          <TabsTrigger value="main"><User /> Detalles de perfil</TabsTrigger>
          <TabsTrigger value="bussines"><Building /> Negocio</TabsTrigger>
          <TabsTrigger value="bank"><Landmark />Cuenta Bancaria</TabsTrigger>
        </TabsList>

        {/* Principal */}
        <TabsContent value="main">
          <CardInformation
            handleSubmit={handleSubmitUpdate}
            processing={processingUpdate}
            userData={userData}
          />
        </TabsContent>

        {/* Dirección y cargos */}
        <TabsContent value="bussines">
          <FormChargesEnabled
            address={userData!.address}
            handleSubmit={handleEnabledCharges}
            processing={processingChargesEnabled}
          />
        </TabsContent>

        {/* Cuenta de banco */}
        <TabsContent value="bank">
          <CardBankAccount
            onToggleUpdate={handleToggleUpdateBank}
            updating={updatingBank}
            bankData={bankAccount}
            userData={userData}
            handleStore={handleSaveBankAccount}
            processing={processingBank}
          />
        </TabsContent>

      </Tabs>

    </div>
  )
}

export default Profile
