import { SidebarProvider } from "@/components/ui/sidebar";

// import Header from "./layout/Header";
// import SideBar from "./layout/SideBar";
// import Dashboard from "./layout/Dashboard";
import { MainSidebar } from "./layout/Sidebar/MainSidebar";
import DashboardHeader from "./layout/DashboardHeader/DashboardHeader";
function App() {
  return (
    <SidebarProvider>
      <MainSidebar />
      <main className="bg-primary h-screen w-screen">
        <DashboardHeader/>
        {/* <DashboardMainBody/> */}
      </main>
    </SidebarProvider>
  );
}

export default App;
