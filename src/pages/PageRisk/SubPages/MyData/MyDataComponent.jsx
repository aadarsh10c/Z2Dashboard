import {
  FileText,
  Settings,
  Box,
  Database,
  Building2,
  LayoutList,
  Users2,
} from "lucide-react";
import { StaticSidebar } from "@/util/StaticSidebar";
import sidebarData from "@/lib/MyDataSidebarData.json";

function MyDataComponent() {
  // Create icon mapping - moved outside component to avoid recreation on each render
  const iconComponents = {
    FileText,
    Settings,
    Box,
    Database,
    Building2,
    LayoutList,
    Users2,
  };

  // Transform the menu items with proper icon components
  const menuItems = sidebarData.menuItems.map((item) => ({
    ...item,
    subitems: item.subitems?.map((subitem) => ({
      ...subitem,
      icon: iconComponents[subitem.iconName],
    })),
  }));

  return (
    <div className="h-full">
      <StaticSidebar menuItems={menuItems} />
      <div className="flex-1 p-6">{/* Add your main content here */}</div>
    </div>
  );
}

// the structure of the page top level view is as follows:
export default MyDataComponent;
