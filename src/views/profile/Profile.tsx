import useAccount from "@/hooks/useAccount"
import CardInformation from "./partials/CardInformation"
import FormDocumentValidation from "./partials/FormDocumentValidation"
import BadgesEnables from "./partials/BadgesEnables"
import CardBankAccount from "./partials/CardBankAccount"
import FormChargesEnabled from "./partials/FormChargesEnabled"

const Profile = () => {

  const {
    userData,
    handleFileIdentifyChange,
    handleUploadIdentify,
    processingDocs,
    handleSaveBankAccount,
    processingBank,
    bankAccount,
    handleEnabledCharges,
    processingChargesEnabled
  } = useAccount()

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4">
      <BadgesEnables 
        charges_enable={userData?.charges_enable} 
        payouts_enable={userData?.payouts_enable} 
      />

      <CardInformation 
        userData={userData} 
      />

      <FormChargesEnabled 
        handleSubmit={handleEnabledCharges}
        processing={processingChargesEnabled}
      />

      <FormDocumentValidation 
        processing={processingDocs} 
        userData={userData} 
        handleSubmit={handleUploadIdentify} 
        handleChangeFile={handleFileIdentifyChange} 
      />
      <CardBankAccount
        bankData={bankAccount}
        userData={userData}
        handleStore={handleSaveBankAccount}
        processing={processingBank}
      />
    </div>
  )
}

export default Profile
