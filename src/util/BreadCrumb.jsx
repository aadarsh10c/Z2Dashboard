import { Slash } from "lucide-react";
import PropTypes from "prop-types";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

/**
 * Renders a breadcrumb navigation component with custom separator
 * @param {Object} props - Component props
 * @param {string[]} props.crumbList - Array of breadcrumb items
 */
export function BreadcrumbWithCustomSeparator({ crumbList }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbList.map((crumb, index) => {
          const isLastItem = index === crumbList.length - 1;
          const formattedCrumb = formatCrumb(crumb);

          return (
            <div key={index}>
              <BreadcrumbItem>
                {isLastItem ? (
                  <BreadcrumbPage>{formattedCrumb}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href="#" disabled>
                    {formattedCrumb}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLastItem && (
                <BreadcrumbSeparator>
                  <Slash size={1} />
                </BreadcrumbSeparator>
              )}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

/**
 * Formats a breadcrumb string by capitalizing each word and replacing hyphens with spaces
 * @param {string} crumb - The breadcrumb string to format
 * @returns {string} The formatted breadcrumb string
 */
function formatCrumb(crumb) {
  return crumb
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

BreadcrumbWithCustomSeparator.propTypes = {
  crumbList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
