import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

// Common style configurations
const mainMenuStyles =
  "text-secondary hover:bg-primary-foreground hover:text-secondary-foreground active:bg-primary-foreground active:text-secondary-foreground group-data-[state=open]/collapsible:bg-primary-foreground group-data-[state=open]/collapsible:text-secondary-foreground";

const subMenuStyles =
  "text-secondary hover:bg-primary-foreground hover:text-secondary-foreground active:bg-primary-foreground active:text-secondary-foreground";

// Helper function to generate active state className
const getActiveClassName = (isActive) =>
  isActive ? "bg-primary-foreground text-secondary-foreground" : "";

export default function NavMain({ items }) {
  const [openMenu, setOpenMenu] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { pathname } = useLocation();

  // Update active states when pathname changes
  useEffect(() => {
    // Find menu item containing current pathname
    const activeItem = items.find((item) =>
      item.items?.some((subItem) => pathname === subItem.url)
    );

    if (activeItem) {
      setOpenMenu(activeItem.title);
      // Find and set active submenu
      const activeSubItem = activeItem.items.find(
        (subItem) => pathname === subItem.url
      );
      if (activeSubItem) {
        setActiveSubmenu(activeSubItem.title);
      }
    }
  }, [pathname, items]);

  // Render submenu items
  const renderSubMenuItems = (item) => (
    <CollapsibleContent>
      <SidebarMenuSub>
        {item.items?.map((subItem) => (
          <SidebarMenuSubItem key={subItem.title}>
            <SidebarMenuSubButton
              className={`${subMenuStyles} ${getActiveClassName(
                pathname === subItem.url
              )}`}
              asChild
              onClick={() => setActiveSubmenu(subItem.title)}
            >
              <Link to={subItem.url}>
                <span>{subItem.title}</span>
              </Link>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        ))}
      </SidebarMenuSub>
    </CollapsibleContent>
  );

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-secondary">Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            className="group/collapsible"
            open={openMenu === item.title}
            onOpenChange={(isOpen) => setOpenMenu(isOpen ? item.title : null)}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`${mainMenuStyles} ${getActiveClassName(
                    openMenu === item.title
                  )}`}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {renderSubMenuItems(item)}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

// PropTypes definition
NavMain.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
      icon: PropTypes.elementType,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};
