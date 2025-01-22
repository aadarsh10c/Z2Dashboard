"use client";

import { useLocation } from "react-router";
import { BreadcrumbWithCustomSeparator } from "@/util/BreadCrumb";
import { Outlet } from "react-router";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Save, Play, Plus } from "lucide-react";

const actionButtons = [
  {
    icon: Save,
    label: "Saved Reports",
    variant: "outline",
    className:
      "h-7 text-xs px-1.5 text-primary-foreground rounded-md hover:bg-secondary-foreground hover:text-primary",
  },
  {
    icon: Play,
    label: "Run Reports",
    variant: "outline",
    className:
      "h-7 text-xs px-1.5 text-primary-foreground rounded-md hover:bg-secondary-foreground hover:text-primary",
  },
  {
    icon: Plus,
    label: "New BOM",
    variant: "default",
    className:
      "h-7 text-xs px-1.5 bg-primary text-secondary-foreground rounded-md hover:bg-primary-foreground hover:text-secondary-foreground",
  },
];

export default function PartRiskMain() {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <section className="bg-secondary rounded-l-md overflow-hidden p-2">
      <header className="flex items-center justify-between mb-2">
        <BreadcrumbWithCustomSeparator crumbList={paths} />
        <div className="flex items-center gap-2">
          {actionButtons.map(({ icon: Icon, label, variant, className }) => (
            <Button key={label} variant={variant} className={className}>
              <span>
                <Icon />
              </span>
              <span>{label}</span>
            </Button>
          ))}
        </div>
      </header>
      <Separator />
      <div className="flex-1 bg-secondary overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
}
