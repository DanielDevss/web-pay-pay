import { Link, Outlet } from "react-router-dom"
import { Toaster } from "../components/ui/sonner"

const Guest = () => {
  return (

    <div className="min-h-screen grid place-content-center">

      <main className="max-w-3xl w-full min-w-xs py-20">
        <Link to={"/"}>
          <picture>
            <img 
              className="h-14 mx-auto mb-5" 
              src='brand.png' 
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
