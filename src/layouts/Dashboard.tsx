import { Outlet } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardHeader from "./partials/DashboardHeader"
import DashboardSidebar from "./partials/DashboardSidebar"
import { Toaster } from "@/components/ui/sonner"

const Dashboard = () => {
  return (
    <div className="font-poppins">
      <SidebarProvider>

        <DashboardSidebar />

        <main className="w-full">
          
          <DashboardHeader />
          
          <div className="px-4 pb-10 pt-5 max-w-6xl mx-auto">
            <Outlet />      
          </div>

        </main>

      </SidebarProvider>

      <Toaster position="top-right" duration={4000} closeButton />
    </div>
  )
}

export default Dashboard
