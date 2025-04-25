import { Link } from "react-router-dom"
import { Key } from "lucide-react"
import ChargeAndPaymentsEnable from "@/assets/documentation/pagos-y-cargos-activos.jpg"
import ChargeAndPaymentsUnable from "@/assets/documentation/pagos-y-cargos-inactivos.jpg"
import CreateKey from "@/assets/documentation/crear-una-llave.jpg"
import TableKeys from "@/assets/documentation/mis-llaves.jpg"

const GettingStarted = () => {
  return (
    <article id="KeyAccess">
        <section>
            <h2>Obtención de la llave de acceso.</h2>
            <p>Para tener acceso a este servicio de pagos tendremos que tener acceso al panel de administración. Primero que nada necesitas <Link to={'/iniciar-sesion'}>iniciar sesión</Link> o <Link to={'crear-cuenta'}>crear una cuenta</Link>. Esto para poder general la llave de acceso que tendrás que integrar en tu aplicación y enviarla como token del API Rest.</p>

            <p>Sigamos con los pasos para poder obtener nuestra primer llave de acceso y hacer uso de este increible servicio.</p>

            <ol>
                <li id="EnabledCharges">
                    <h3>Habilitar los cargos y pagos.</h3>

                    <p>
                    Lo primero que tenemos que conseguir es que en el panel de <kbd>/cuenta</kbd>, nos deberia de mostrar hasta arriba estos dos parametros (<kbd>Cargos activos</kbd> <kbd>Pagos activos</kbd>), ya que si no se encuentrán de esa forma, al momento de intentar crear un pago este nos saltará con un error.
                    </p>

                    <figure className="flex flex-col text-start">
                        <img src={ChargeAndPaymentsEnable} alt="Captura de que los pagos y cargos se encuentran activos y se pueden realizar pagos a travez del api" />
                    </figure>

                    <p>Sin embargo, en caso de que los pagos y cargos no se encuentrén activos, nos aparecera en está misma sección una alerta donde nos indicará que tenemos información que completar:</p>

                    <figure>
                        <img src={ChargeAndPaymentsUnable} alt="Captura de que los pagos y cargos aún se encuentrán inactivos y que require acción necesaria." />
                    </figure>
                    
                </li>

                <li id="CreateKey">
                    <h3>Crear una llave de acceso</h3>

                    <p>Si ya hemos activado tanto los pagos como los cargos, entonces estamos listos para crear nuestra <strong>primer llave de acceso</strong>.</p>
                    <p>Para esto tendremos que entrar en nuestro panel y acceder a la sección de <kbd><Key className="inline h-4" /> Llaves de acceso</kbd> (Aquí administraremos todas las llaves de acceso que hayamos creado al momento), verás que nos muestra lo siguiente:</p>

                    <figure>
                        <img src={CreateKey} alt="Captura de pantalla mostrando la vista virgen de llaves de acceso." />
                    </figure>

                    <p>Nosotros precionaremos en generar una llave y esto nos abrira una pantalla donde podremos generar nuestra primer llave, solo rellenando los datos que nos pide el formulario. Y una vez generada nuestra llave de acceso nos mostrará una tabla en esta misma vista. Donde podemos volver a crear una nueva llave o gestionar la que ya tenemos:</p>

                    <figure>
                        <img src={TableKeys} alt="Tabla de llaves de acceso en el panel de administración." />
                    </figure>
                </li>

                <li id="UseKey">
                    <h3>Uso de la llave de acceso</h3>

                    <p>Como podrás ver la llave de acceso no es más que un <strong>UUID</strong> generado por nuestro sistema. Sin embargo el UUID será utilizado para llevar un control de pagos; es decir, todos los pagos que realices desde tu e-commerce se encontrarán relacionados a este UUID.</p>

                    <p>Ahora, <strong>¿comó puedo usar mi llave?</strong>, solo existe una forma y es enviandola como un <strong>Bearer token</strong>. Es importante recalcar que esta clave no puede ser creada fuera del sistema.</p>
                </li>
            </ol>
        </section>

    </article>
  )
}

export default GettingStarted
