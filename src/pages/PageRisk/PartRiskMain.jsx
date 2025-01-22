import { useLocation } from "react-router";
import { Outlet } from "react-router";
import { Separator } from "@/components/ui/separator";
import PageRiskHeader from "./PageRiskHeader";



export default function PartRiskMain() {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <section className="bg-secondary rounded-l-md overflow-hidden p-2">
      <PageRiskHeader paths={paths} />
      <Separator />
      <div className="flex-1 bg-secondary overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
}
