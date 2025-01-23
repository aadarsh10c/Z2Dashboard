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
import { User , ChevronDown, Calendar, Search} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <div className="flex items-center gap-2 border-2 bg-secondary px-2 rounded-md max-w-[20rem] w-full h-8">
          <Search className="w-6 h-4 text-primary-foreground" />
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent border-none outline-none  caret-primary-foreground w-full h-full text-sm"
          />
        </div>
        <Button variant="outline" className="text-xs px-1.5">
          <span>
            <User />
          </span>
          <span>Created By</span>
          <span>
            <ChevronDown />
          </span>
        </Button>
        <Button variant="outline" className="text-xs px-1.5">
          <span>
            <Calendar />
          </span>
          <span>Creation Date</span>
          <span>
            <ChevronDown />
          </span>
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
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
