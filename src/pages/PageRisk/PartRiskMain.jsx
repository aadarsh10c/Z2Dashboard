"use client";

import { useLocation } from "react-router";
import PropTypes from "prop-types";
import { Separator } from "@/components/ui/separator";

function getPageTitle(pathname) {
  const segments = pathname.split("/").filter(Boolean);

  // Home page
  if (segments.length === 0) {
    return "Home";
  }

  // Part Risk Manager section
  if (segments[0] === "part-risk-manager") {
    const subPath = segments[1];
    if (subPath === "my-data") {
      return "Part Risk Manager / My Data";
    } else if (subPath === "basic") {
      return "Part Risk Manager / Basic";
    } else if (subPath === "strategic-sourcing") {
      return "Part Risk Manager / Strategic Sourcing";
    } else if (subPath === "environmental-compliance") {
      return "Part Risk Manager / Environmental Compliance";
    } else if (subPath === "market") {
      return "Part Risk Manager / Market";
    } else if (subPath === "one-risk") {
      return "Part Risk Manager / One Risk";
    } else if (subPath === "alerts") {
      return "Part Risk Manager / Alerts";
    }
  }

  // Supply Chain Watch section
  if (segments[0] === "supply-chain-watch") {
    const subPath = segments[1];
    if (subPath === "introduction") {
      return "Supply Chain Watch / Introduction";
    } else if (subPath === "get-started") {
      return "Supply Chain Watch / Get Started";
    } else if (subPath === "tutorials") {
      return "Supply Chain Watch / Tutorials";
    } else if (subPath === "changelog") {
      return "Supply Chain Watch / Changelog";
    }
  }

  // Supplier Insights section
  if (segments[0] === "supplier-insights") {
    const subPath = segments[1];
    if (subPath === "general") {
      return "Supplier Insights / General";
    } else if (subPath === "team") {
      return "Supplier Insights / Team";
    } else if (subPath === "billing") {
      return "Supplier Insights / Billing";
    } else if (subPath === "limits") {
      return "Supplier Insights / Limits";
    }
  }

  return "";
}

export default function PageHeader({ children }) {
  const { pathname } = useLocation();
  const title = getPageTitle(pathname);
  const [mainTitle, subTitle] = title.split(" / ");

  return (
    <div className="w-full flex flex-col h-screen overflow-hidden bg-[hsl(var(--navy-blue-800))]">
      <div className="flex-1 rounded-r-md bg-[hsl(var(--white-400))] flex flex-col overflow-hidden">
        <div className="flex items-center flex-shrink-0">
          <p className="mx-2 my-4 cursor-pointer">
            {mainTitle && (
              <>
                <span className="text-gray-500">{mainTitle}</span>
              </>
            )}
            {subTitle && (
              <>
                <span className="text-gray-400 mx-2">/</span>
                <span>{subTitle}</span>
              </>
            )}
          </p>
        </div>
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
