import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import NavMain from "./NavMain";
import NavProjects from "./NavProjects";
import NavUser from "./NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import MainSidebarHeader from "./MainSidebarHeader";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: SquareTerminal,
      items: [],
    },
    {
      title: "Part Risk Manager",
      url: "/part-risk-manager",
      icon: Bot,
      items: [
        {
          title: "My Data",
          url: "/part-risk-manager/my-data",
        },
        {
          title: "Basic",
          url: "/part-risk-manager/basic",
        },
        {
          title: "Strategic Sourcing",
          url: "/part-risk-manager/strategic-sourcing",
        },
        {
          title: "Environmental Compliance",
          url: "/part-risk-manager/environmental-compliance",
        },
        {
          title: "Market",
          url: "/part-risk-manager/market",
        },
        {
          title: "One Risk",
          url: "/part-risk-manager/one-risk",
        },
        {
          title: "Alerts",
          url: "/part-risk-manager/alerts",
        },
      ],
    },
    {
      title: "Supply Chain Watch",
      url: "/supply-chain-watch",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/supply-chain-watch/introduction",
        },
        {
          title: "Get Started",
          url: "/supply-chain-watch/get-started",
        },
        {
          title: "Tutorials",
          url: "/supply-chain-watch/tutorials",
        },
        {
          title: "Changelog",
          url: "/supply-chain-watch/changelog",
        },
      ],
    },
    {
      title: "Supplier Insights",
      url: "/supplier-insights",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/supplier-insights/general",
        },
        {
          title: "Team",
          url: "/supplier-insights/team",
        },
        {
          title: "Billing",
          url: "/supplier-insights/billing",
        },
        {
          title: "Limits",
          url: "/supplier-insights/limits",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

/**
 * MainSidebar Component
 * 
 * Primary navigation sidebar for the application that displays:
 * - Main navigation menu items with nested routes
 * - Project shortcuts
 * - User profile information
 * 
 * The sidebar is collapsible and supports an icon-only view for better space utilization.
 * Data is currently hardcoded.
 */

export function MainSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props} >
      <MainSidebarHeader />
      <SidebarContent className="text-secondary">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
