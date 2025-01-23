import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataTablePagination } from "../../../../util/TablePagiantion";
import PropTypes from "prop-types";
import { User, ChevronDown, Calendar, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SearchInput = () => (
  <div className="flex items-center gap-2 border-2 bg-secondary px-2 rounded-md max-w-[20rem] w-full h-8">
    <Search className="w-6 h-4 text-primary-foreground" />
    <input
      type="text"
      placeholder="Search anything..."
      className="bg-transparent border-none outline-none caret-primary-foreground w-full h-full text-sm"
    />
  </div>
);

export function MyDataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="flex flex-col items-between justify-center gap-2">
      <div className="flex items-center justify-start gap-2">
        <SearchInput />
        {[
          { icon: User, text: "Created By" },
          { icon: Calendar, text: "Creation Date" },
        ].map(({ icon: Icon, text }) => (
          <Button key={text} variant="outline" className="text-xs px-1.5">
            <Icon />
            <span>{text}</span>
            <ChevronDown />
          </Button>
        ))}
      </div>
      <div className="rounded-md border flex flex-col h-[calc(100vh-12rem)]">
        <Table className="relative">
          <TableHeader className="bg-secondary-foreground sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="overflow-y-auto">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}

MyDataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      accessorKey: PropTypes.string,
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
