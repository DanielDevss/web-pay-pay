import { Route, Routes, useLocation } from "react-router-dom"
import Web from "../layouts/Web"
// import Welcome from "../views/Welcome"
import Guest from "../layouts/Guest"
import SignIn from "../views/guest/SignIn"
import SignUp from "../views/guest/SignUp"
import Dashboard from "../layouts/Dashboard"
import DashboardHome from "../views/DashboardHome"
import Profile from "../views/profile/Profile"
import Keys from "../views/keys/Keys"
import AuthProvider from "@/providers/AuthProvider"
import Payments from "@/views/payments/Payments"
import Checkout from "@/views/checkout/Checkout"
import Documentation from "@/views/Documentation"
import Payment from "@/views/payments/Payment"
import { useEffect } from "react"
import ForgotPassword from "@/views/guest/ForgotPassword"
import PasswordReset from "@/views/guest/PasswordReset"
import Devices from "@/views/devices/Devices"
import Customers from "@/views/Customers/Customers"
import ErrorLogs from "@/views/ErrorLogs/ErrorLogs"
import KeyShow from "@/views/keys/KeyShow"

const AppRoutes = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ behavior: "instant", top: 0 })
  }, [location.pathname])

  return (
    <Routes>
      {/* Direcciones comunes */}
      <Route element={<Web />} path="/">
        <Route index element={<Documentation />} />
      </Route>

      {/* Direccion de autenticación */}
      <Route element={<Guest />} path="/">
        <Route element={<SignIn />} path="/iniciar-sesion" />
        <Route element={<SignUp />} path="/crear-cuenta" />
        <Route element={<ForgotPassword />} path="/recuperar-contrasena" />
        <Route element={<PasswordReset />} path="/recuperar-contrasena/:id" />
      </Route>

      {/* Direcciones privadas y protegidas (dashboard) */}
        <Route element={<AuthProvider><Dashboard /></AuthProvider>} path="/administrador">
          <Route element={<DashboardHome />} index />
          <Route element={<Profile />} path="perfil" />
          <Route element={<Keys />} path="llaves-de-acceso" />
          <Route element={<KeyShow />} path="llaves-de-acceso/:id" />
          <Route element={<Payments />} path="historial-de-pagos" />
          <Route element={<Payment />} path="historial-de-pagos/:id" />
          <Route element={<Devices />} path="dispositivos" />
          <Route element={<Customers />} path="clientes" />
          <Route element={<ErrorLogs />} path="registro-de-errores" />
        </Route>

      {/* Checkout */}
      <Route path="/checkout/:id" element={<Checkout />} />
    </Routes>
  )
}

export default AppRoutes
