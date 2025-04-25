import useCheckout from "@/hooks/useCheckout"
import { CardElement } from "@stripe/react-stripe-js"
import { ArrowRight, Loader2} from "lucide-react"

const FormCheckout = () => {

    const { handleSubmit, handleCancel, data, stripe, error, processing } = useCheckout()

    if (data?.status !== "requires_payment_method") return <div>Checkout no disponible</div>

    return (
        <form onSubmit={handleSubmit} className="max-w-md">

            <div className="bg-white flex flex-col gap-4 rounded-md shadow-lg">

                <div className="p-5 text-center">
                    <h1 className="font-bold text-lg">Checkout de compra</h1>
                    <p className="font-light text-zinc-400">Ingresa tus datos para completar la compra</p>
                </div>

                <div className="px-5 py-3 border-t-zinc-100">

                    <CardElement className="px-5 py-4 border border-zinc-300 transition hover:border-zinc-400 rounded-md" />
                    {error && <small className="text-red-500 text-sm text-center block mt-1">{error}</small>}

                </div>

                <div className="flex flex-col gap-2 px-5 font-medium">
                    <button 
                        className="w-full px-4 py-3 rounded-md bg-emerald-500 flex items-center justify-center text-white relative cursor-pointer hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-300/0 hover:shadow-emerald-300/50 active:bg-emerald-700 disabled:bg-neutral-500 disabled:hover:shadow-none disabled:cursor-not-allowed"
                        disabled={!stripe || processing}
                    >
                        {processing 
                            ? <Loader2 className="animate-spin absolute opacity-70 right-4" /> 
                            : <ArrowRight className="absolute opacity-70 right-4" />
                        }
                        {processing ? "Procesando pago..." : `Pagar ${data?.amount}`}
                    </button>

                    <button 
                        onClick={handleCancel} 
                        className="w-full px-4 py-3 rounded-md cursor-pointer border border-zinc-400/40 hover:border-zinc-400/100 text-zinc-500 transition disabled:border-zinc-400/30 disabled:hover:border-zinc-400/30 disabled:text-zinc-400 disabled:cursor-not-allowed"
                        type="button"
                        disabled={!stripe || processing}
                    >
                        Cancelar pago
                    </button>
                </div>

                <div className="p-5">

                    <p className="text-xs">
                        Procesamos su pago de manera segura a través de <span className="font-bold">PayPay</span>, brindándole protección en cada transacción. Sus datos están cifrados y respaldados por una de las plataformas más confiables del mundo.
                    </p>

                </div>

            </div>

        </form>
    )
}

export default FormCheckout
