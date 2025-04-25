import useDocumentTitle from "@/hooks/useDocumentTitle"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import FormCheckout from "./FormCheckout"

const publicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY
const stripePromise = loadStripe(publicKey)

const Checkout = () => {

  useDocumentTitle("Realiza tu pago")

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-amber-50 text-zinc-800">
      <Elements stripe={stripePromise}>
        <FormCheckout />
      </Elements>
    </div>
  )
}

export default Checkout
