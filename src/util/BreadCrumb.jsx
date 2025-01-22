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

export function BreadcrumbWithCustomSeparator({ crumbList }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbList.map((crumb, index) => (
          <>
            <BreadcrumbItem key={index}>
              {index === crumbList.length - 1 ? (
                <BreadcrumbPage>{formatCrumb(crumb)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href="#" disabled>
                  {formatCrumb(crumb)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < crumbList.length - 1 && (
              <BreadcrumbSeparator>
                <Slash size={1} />
              </BreadcrumbSeparator>
            )}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function formatCrumb(crumb) {
  return crumb
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

BreadcrumbWithCustomSeparator.propTypes = {
  crumbList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
