import {
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Z2Logo from "@/assets/z2_logo.jpg";
/**
 * MainSidebarHeader Component
 *
 * This component provides a header for the main sidebar, including a logo and a toggle button.
 * It also handles the sidebar state and provides a function to toggle the sidebar.
 */

export default function MainSidebarHeader() {
  const { open, setOpen } = useSidebar();
  /**
   * Toggles the sidebar state.
   * If the sidebar is currently closed, it will open it.
   * If the sidebar is already open, it does nothing.
   */
  function toggleSidebar() {
    if (!open) {
      setOpen(true);
    } else return null;
  }

  return (
    <SidebarHeader>
      <div className="flex items-center justify-between gap-2">
        <img
          src={Z2Logo}
          alt="Z2Data Logo"
          width={25}
          height={25}
          onClick={toggleSidebar}
          className={!open ? "cursor-pointer" : ""}
        />
        {open && (
          <SidebarTrigger className="text-secondary hover:bg-primary-foreground hover:text-secondary-foreground" />
        )}
      </div>
    </SidebarHeader>
  );
}
