import { useLocation } from "react-router";
import { Outlet } from "react-router";
import { Separator } from "@/components/ui/separator";
import PageRiskHeader from "./PageRiskHeader";



export default function PartRiskMain() {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <section className="h-screen bg-secondary rounded-l-md p-2 flex flex-col">
      <PageRiskHeader paths={paths} />
      <Separator />
      <div className="flex-1 bg-secondary">
        <Outlet />
      </div>
    </section>
  );
}
