const Aside = () => {
    return (
        <aside className="col-span-1">
            <nav>
                <ul>

                    <li>
                        <a href="#KeyAccess">LLaves de acceso</a>
                        <ul>
                            <li>
                                <a href="#EnabledCharges">Habilitar cargos</a>
                            </li>
                            <li>
                                <a href="#CreateKey">Crear una llave de acceso</a>
                            </li>
                            <li>
                                <a href="#UseKey">Uso de la llave de acceso</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#Payments">Uso de pagos</a>
                        <ul>
                            <li><a href="#CreatePayment">Crear un pago</a></li>
                            <li><a href="#GetPayment">Recuperar información</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside
