import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// import Header from "./layout/Header";
// import SideBar from "./layout/SideBar";
// import Dashboard from "./layout/Dashboard";
import { MainSidebar } from "./layout/Sidebar/MainSidebar";

function App() {
  return (
    <SidebarProvider>
      <MainSidebar />
      <main className="bg-primary h-screen w-screen">
        <SidebarTrigger className="hover:bg-primary-foreground hover:text-secondary" />
        {/* <Header />
        <SideBar />
        <Dashboard /> */}
      </main>
    </SidebarProvider>
  );
}

export default App;
