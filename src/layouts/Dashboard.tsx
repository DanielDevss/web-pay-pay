import { Outlet } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardHeader from "./partials/DashboardHeader"
import DashboardSidebar from "./partials/DashboardSidebar"
import { Toaster } from "@/components/ui/sonner"

const Dashboard = () => {
  return (
    <>
      <SidebarProvider>
        <DashboardSidebar />
        <main className="w-full">
          <DashboardHeader />
          <div className="p-4">
            <Outlet />      
          </div>
        </main>
      </SidebarProvider>

      <Toaster position="top-right" duration={4000} closeButton />
    </>
  )
}

export default Dashboard
