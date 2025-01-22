import { Button } from "@/components/ui/button";
import { Save, Play, Plus } from "lucide-react";
import PropTypes from "prop-types";

const defaultActionButtons = [
  {
    icon: Save,
    label: "Saved Reports",
    variant: "outline",
    className:
      "h-7 text-xs px-1.5 text-primary-foreground rounded-md hover:bg-secondary-foreground hover:text-primary",
  },
  {
    icon: Play,
    label: "Run Reports",
    variant: "outline",
    className:
      "h-7 text-xs px-1.5 text-primary-foreground rounded-md hover:bg-secondary-foreground hover:text-primary",
  },
  {
    icon: Plus,
    label: "New BOM",
    variant: "default",
    className:
      "h-7 text-xs px-1.5 bg-primary text-secondary-foreground rounded-md hover:bg-primary-foreground hover:text-secondary-foreground",
  },
];

export function ActionButtons({ buttons = defaultActionButtons, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {buttons.map(({ icon: Icon, label, variant, className, onClick }) => (
        <Button key={label} variant={variant} className={className} onClick={onClick}>
          <span>
            <Icon />
          </span>
          <span>{label}</span>
        </Button>
      ))}
    </div>
  );
}

ActionButtons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      label: PropTypes.string.isRequired,
      variant: PropTypes.string,
      className: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  className: PropTypes.string,
}; 