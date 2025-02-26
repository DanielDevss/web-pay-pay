import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"
import WebHeader from "./partials/WebHeader"

const Web = () => {
  return (
    <>
      <WebHeader />

      <div className="container mx-auto p-3 pt-20">

        <Outlet />

      </div>

      <Toaster position="top-right" />
    </>
  )
}

export default Web
