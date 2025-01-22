import { FolderClosed } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
];
