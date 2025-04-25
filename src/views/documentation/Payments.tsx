import Alert from "@/components/Alert"
import { AlertDescription, AlertTitle } from "@/components/ui/alert"
import { validationBodyRequest } from "@/data/ScriptsDocumentation"
import { Info } from "lucide-react"

const Payments = () => {
  return (
    <section id="Payments">
        <h2>Uso de pagos</h2>

        <p>Generar pagos es muy sencillo, mucho  más sencillo que el uso de otras plataformas, ya que hemos simplificado para que esto sea mucho más fácil para ti.</p>

        <p>De momento podemos hacer uso del <strong>end-point</strong> <kbd>/payments</kbd>, el cual nos ayudará ha crear un pago de manera segura.</p>

        <p>Ahora, antes de continuar cabe resaltar que para crear nuestro primer pago, necesitaremos enviar un <kbd>body</kbd>, en el cual estaremos enviando el monto a pagar y los enlaces para una redirección en caso de error y success:</p>

        <table id="BodyPaymentRequest">
            <thead>
                <tr>
                    <th colSpan={3}>Cuerpo de envío</th>
                </tr>
                <tr>
                    <th>Campos</th>
                    <th>Tipado</th>
                    <th>Comentarios</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="font-bold">amount</td>
                    <td>number (requerido)</td>
                    <td>Este es el monto que vamos a cobrar desde nuestra plataforma. Es importante mencionar que el monto se tiene que enviar en centavos para poder realizar calculos de forma correcta.</td>
                </tr>
                <tr>
                    <td className="font-bold">successUrl</td>
                    <td>string (requerido)</td>
                    <td>Está será la URL a donde redireccionaremos al momento de realizar una venta exitosa. Por lo tanto es importante validar en nuestros formularios que el string enviado tiene que tener un formato de enlace: <kbd>https://myecommerce.com/success</kbd></td>
                </tr>
                <tr>
                    <td className="font-bold">cancelUrl</td>
                    <td>string (requerido)</td>
                    <td>Aunque siempre esperamos una respuesta de success, abra casos en los que los usuarios cancelen una venta o que existan fallos internos. Para esto tenemos el URL de cancelación, el cual en caso de fallo o cancelación será redirigido de forma automatica: <kbd>https://myecommerce.com/cancel</kbd></td>
                </tr>
            </tbody>
        </table>

        <p>Como puedes ver la forma de crear un pago desde nuestra API Rest es bastante fácil para el desarrollador. Si necesitas una solución limpia y rápida estás con la opción correcta. Ya que mantenemos la misma seguridad que otrás pasarelas de pago como <strong>Stripe</strong>.</p>

        {/* Crear pagos */}

        <h3 id="CreatePayment">Creando los pagos</h3>

        <p>Para generar nuestro primer pago haremos uso del <a href="#BodyPaymentRequest">cuerpo</a> que nos fue presentado anteriormente, pero usando nuestrá información y enviando una solicitud de tipo <kbd>POST</kbd> y claro usando como token nuestra <a href="#CreateKey">primer llave de acceso</a>.</p>

        <Alert>
            <Info className="me-2"/>
            <AlertTitle className="font-bold">¿Y si no envio el cuerpo?</AlertTitle>
            <AlertDescription>En caso de que no envies el cuerpo, el API no generará ningun pago, por lo cual no podremos realizar ninguna venta. Incluso puedes usar nuestra respuesta como validación en tu e-commerce:</AlertDescription>
        </Alert>

        <pre>
            <code>{validationBodyRequest}</code>
        </pre>

    </section>
  )
}

export default Payments
