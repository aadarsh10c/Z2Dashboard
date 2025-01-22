"use client";

import { useLocation } from "react-router";
import { BreadcrumbWithCustomSeparator } from "@/util/BreadCrumb";
import { Outlet } from "react-router";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Save, Play, Plus } from "lucide-react";

export default function PartRiskMain() {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean);
  return (
    <section className="bg-secondary rounded-l-md overflow-hidden p-2">
      <header className="flex items-center justify-between mb-2">
        <BreadcrumbWithCustomSeparator crumbList={paths} />
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-7 text-xs px-1.5  text-primary-foreground rounded-md hover:bg-secondary-foreground hover:text-primary"
          >
            <span>
              <Save />
            </span>
            <span>Saved Reports</span>
          </Button>
          <Button
            variant="outline"
            className="h-7 text-xs px-1.5 text-primary-foreground rounded-md hover:bg-secondary-foreground hover:text-primary"
          >
            <span>
              <Play />
            </span>
            <span>Run Reports</span>
          </Button>
          <Button className="h-7 text-xs px-1.5 bg-primary text-secondary-foreground rounded-md hover:bg-primary-foreground hover:text-secondary-foreground">
            <span>
              <Plus />
            </span>
            <span>New BOM</span>
          </Button>
        </div>
      </header>
      <Separator />
      <div className="flex-1 bg-secondary overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
}
