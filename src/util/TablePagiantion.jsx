import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Configuration for page size options
const PAGE_SIZE_OPTIONS = [10, 20, 30, 40, 50];

// Common button styles
const PAGINATION_BUTTON_STYLES = "h-8 w-8 p-0";

// Navigation button configurations
const navigationButtons = [
  {
    id: "first",
    icon: ChevronsLeft,
    action: (table) => table.setPageIndex(0),
    getDisabled: (table) => !table.getCanPreviousPage(),
    label: "Go to first page",
    className: "hidden lg:flex",
  },
  {
    id: "prev",
    icon: ChevronLeft,
    action: (table) => table.previousPage(),
    getDisabled: (table) => !table.getCanPreviousPage(),
    label: "Go to previous page",
  },
  {
    id: "next",
    icon: ChevronRight,
    action: (table) => table.nextPage(),
    getDisabled: (table) => !table.getCanNextPage(),
    label: "Go to next page",
  },
  {
    id: "last",
    icon: ChevronsRight,
    action: (table) => table.setPageIndex(table.getPageCount() - 1),
    getDisabled: (table) => !table.getCanNextPage(),
    label: "Go to last page",
    className: "hidden lg:flex",
  },
];

function PaginationButton({
  icon: Icon,
  action,
  disabled,
  label,
  className = "",
}) {
  return (
    <Button
      variant="outline"
      className={`${PAGINATION_BUTTON_STYLES} ${className}`}
      onClick={action}
      disabled={disabled}
    >
      <span className="sr-only">{label}</span>
      <Icon />
    </Button>
  );
}

function PageSizeSelector({ table }) {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium">Rows per page</p>
      <Select
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={(value) => table.setPageSize(Number(value))}
      >
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {PAGE_SIZE_OPTIONS.map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function DataTablePagination({ table }) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length;
  const totalCount = table.getFilteredRowModel().rows.length;
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {selectedCount} of {totalCount} row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <PageSizeSelector table={table} />

        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {currentPage} of {totalPages}
        </div>

        <div className="flex items-center space-x-2">
          {navigationButtons.map(
            ({ id, icon, action, getDisabled, label, className }) => (
              <PaginationButton
                key={id}
                icon={icon}
                action={() => action(table)}
                disabled={getDisabled(table)}
                label={label}
                className={className}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

// PropTypes definitions
PaginationButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  action: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PageSizeSelector.propTypes = {
  table: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    setPageSize: PropTypes.func.isRequired,
  }).isRequired,
};

DataTablePagination.propTypes = {
  table: PropTypes.shape({
    getFilteredSelectedRowModel: PropTypes.func.isRequired,
    getFilteredRowModel: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    getPageCount: PropTypes.func.isRequired,
    setPageIndex: PropTypes.func.isRequired,
    getCanPreviousPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    getCanNextPage: PropTypes.func.isRequired,
    setPageSize: PropTypes.func.isRequired,
  }).isRequired,
};
