"use client";

import { useLocation } from "react-router";
import { BreadcrumbWithCustomSeparator } from "@/util/BreadCrumb";
import { Outlet } from "react-router";
import { Separator } from "@/components/ui/separator";
export default function PartRiskMain() {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean);
  return (
    <section className="bg-secondary rounded-l-md overflow-hidden p-2">
      <header className="flex items-center mb-2">
        <BreadcrumbWithCustomSeparator crumbList={paths} />
      </header>
      <Separator />
      <div className="flex-1 overflow-y-auto bg-secondary overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
}
