import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronsUpDown } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import PropTypes from "prop-types";

export default function NavUser({ user }) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
NavUser.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
