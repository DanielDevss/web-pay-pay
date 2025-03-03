import { Route, Routes } from "react-router-dom"
import Web from "../layouts/Web"
import Welcome from "../views/Welcome"
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

const AppRoutes = () => {
  return (
    <Routes>
      {/* Direcciones comunes */}
      <Route element={<Web />} path="/">
        <Route element={<Welcome />} index />
      </Route>

      {/* Direccion de autenticación */}
      <Route element={<Guest />} path="/">
        <Route element={<SignIn />} path="/iniciar-sesion" />
        <Route element={<SignUp />} path="/crear-cuenta" />
      </Route>

      {/* Direcciones privadas y protegidas (dashboard) */}
        <Route element={<AuthProvider><Dashboard /></AuthProvider>} path="/administrador">
          <Route element={<DashboardHome />} index />
          <Route element={<Profile />} path="perfil" />
          <Route element={<Keys />} path="llaves" />
          <Route element={<Payments />} path="historial-de-pagos" />
        </Route>

      {/* Checkout */}
      <Route path="/checkout/:id" element={<Checkout />} />
    </Routes>
  )
}

export default AppRoutes
