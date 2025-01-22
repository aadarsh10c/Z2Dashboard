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
                <BreadcrumbPage>{crumb}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href="#"
                  disabled
                >
                  {crumb}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < crumbList.length - 1 && (
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            )}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

BreadcrumbWithCustomSeparator.propTypes = {
  crumbList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
