/**
 * MyDataTable Component - Optimized for Large Dataset Rendering
 *
 * Performance Optimizations:
 *
 * 1. Memoized Components:
 *    - SearchInput, FilterButtons, and TableRowMemo are wrapped with memo()
 *    - Prevents unnecessary re-renders when parent component updates
 *    - Especially important for TableRowMemo as it's rendered for each row
 *
 * 2. Table Configuration Memoization:
 *    - tableConfig object is memoized using useMemo
 *    - Only recalculates when data, columns, sorting, or filters change
 *    - Prevents expensive table reconfiguration on every render
 *    const tableConfig = useMemo(() => ({...}), [data, columns, sorting, columnFilters]);
 *
 *
 * 3. Pagination Implementation:
 *    - Built-in pagination reduces the number of rendered rows
 *    - Essential for handling large datasets efficiently
 *
 * 4. Component Structure:
 *    - Logical separation of components (SearchInput, FilterButtons, TableRowMemo)
 *    - Improves maintainability and allows for granular rendering optimization
 *
 * When to use these optimizations:
 * - Large datasets (hundreds of rows)
 * - Complex table interactions (sorting, filtering, pagination)
 * - When performance monitoring shows rendering bottlenecks
 *
 * Note: These optimizations might be unnecessary for small datasets
 * and could add unnecessary complexity in such cases.
 */

import { useState, memo, useMemo } from "react";
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

// Memoized search input component to prevent unnecessary re-renders
// Renders a search box with an icon and input field
const SearchInput = memo(() => (
  <div className="flex items-center gap-2 border-2 bg-secondary px-2 rounded-md max-w-[20rem] w-full h-8">
    <Search className="w-6 h-4 text-primary-foreground" />
    <input
      type="text"
      placeholder="Search anything..."
      className="bg-transparent border-none outline-none caret-primary-foreground w-full h-full text-sm"
    />
  </div>
));

SearchInput.displayName = "SearchInput";

// Memoized table row component for performance optimization
// Renders a single row with its cells based on the provided row data
const TableRowMemo = memo(({ row }) => (
  <TableRow data-state={row.getIsSelected() && "selected"}>
    {row.getVisibleCells().map((cell) => (
      <TableCell key={cell.id}>
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </TableCell>
    ))}
  </TableRow>
));

TableRowMemo.displayName = "TableRowMemo";
TableRowMemo.propTypes = {
  row: PropTypes.object.isRequired,
};

// Memoized filter buttons component
// Renders a list of filter buttons with icons for filtering table data
const FilterButtons = memo(() => (
  <>
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
  </>
));

FilterButtons.displayName = "FilterButtons";

// Main table component that handles data display, sorting, filtering, and pagination
export function MyDataTable({ columns, data }) {
  // State for sorting and filtering
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  // Memoize table configuration to prevent unnecessary recalculations
  const tableConfig = useMemo(
    () => ({
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
    }),
    [data, columns, sorting, columnFilters]
  );

  // Create table instance
  const table = useReactTable(tableConfig);

  return (
    <div className="flex flex-col items-between justify-center gap-2">
      <div className="flex items-center justify-start gap-2">
        <SearchInput />
        <FilterButtons />
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
              table
                .getRowModel()
                .rows.map((row) => <TableRowMemo key={row.id} row={row} />)
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
