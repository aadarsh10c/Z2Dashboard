import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "./layout/Sidebar/MainSidebar";
import DashboardHeader from "./layout/DashboardHeader/DashboardHeader";
import DashboardMainBody from "./layout/DashboardMainBody/DashboardMainBody";
function App() {
  return (
    <SidebarProvider>
      <MainSidebar className="mr-2" />
      <main className="bg-primary h-screen w-screen flex flex-col">
        <DashboardHeader />
        <DashboardMainBody />
      </main>
    </SidebarProvider>
  );
}

export default App;
