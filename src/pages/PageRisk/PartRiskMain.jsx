"use client";

import { useLocation } from "react-router";
import PropTypes from "prop-types";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbWithCustomSeparator } from "@/util/BreadCrumb";

export default function PageHeader({ children }) {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean);
  return (
    <div className="w-full flex flex-col h-screen overflow-hidden bg-[hsl(var(--navy-blue-800))]">
      <div className="flex-1 rounded-r-md bg-[hsl(var(--white-400))] flex flex-col overflow-hidden">
        <BreadcrumbWithCustomSeparator crumbList={paths} />
        <Separator className="flex-shrink-0" />
        <div className="flex-1 overflow-y-auto bg-[hsl(var(--white-500))]">
          {children}
        </div>
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node,
};
