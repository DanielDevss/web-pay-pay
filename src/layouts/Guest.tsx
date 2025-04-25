import { Link, Outlet } from "react-router-dom"
import Logotipo from "@/assets/images/moneypay.png"
import { Toaster } from "../components/ui/sonner"

const Guest = () => {
  return (

    <div className="bg-primary-foreground min-h-screen grid place-content-center">


      <main className="max-w-3xl w-full min-w-xs py-20">
        <Link to={"/"}>
          <picture>
            <img 
              className="h-36 mx-auto mb-5" 
              src={Logotipo} 
              alt="Logotipo de la pasarela" 
            />
          </picture>
        </Link>
        <Outlet />
      </main>

      <Toaster
        closeButton
        visibleToasts={4}
        duration={2500}
        position="top-right"
      />

    </div>

  )
}

export default Guest
