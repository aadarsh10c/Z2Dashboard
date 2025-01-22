import { FolderClosed } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("name");
      return (
        <div className="inline-flex items-center gap-2 text-sm">
          <FolderClosed size={14} />
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
    cell: ({ row }) => {
      const createdBy = row.getValue("createdBy");
      const fb = createdBy[0].toUpperCase();
      return (
        <div className="inline-flex items-center gap-2 text-sm">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">{fb}</AvatarFallback>
          </Avatar>
          {createdBy}
        </div>
      );
    },
  },
  {
    accessorKey: "created",
    header: "Created",
  },
  {
    accessorKey: "modified",
    header: "Modified",
  },
  {
    accessorKey: "...",
    header: <MoreHorizontal className="h-4 w-4" />,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Action 1</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Action 2</DropdownMenuItem>
            <DropdownMenuItem>Action 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
    
];
