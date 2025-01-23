import PropTypes from "prop-types";

/**
 * StaticSidebar Component
 * Renders a static sidebar navigation menu with support for headers and nested items
 * @param {Object[]} menuItems - Array of menu items to display
 * @param {string} className - Additional CSS classes to apply to the sidebar
 */
export function StaticSidebar({ menuItems, className = "" }) {
  return (
    <aside className={`w-52 bg-white border-r border-gray-200 ${className}`}>
      <nav className="px-2 py-2">
        {menuItems.map((item) => (
          <MenuItem key={item.title} item={item} />
        ))}
      </nav>
    </aside>
  );
}

/**
 * MenuItem Component
 * Renders an individual menu item, which can be either a header or a group of subitems
 */
function MenuItem({ item }) {
  return (
    <div className="mb-6">
      {/* Render header if item is marked as header */}
      {item.isHeader && (
        <div className="px-2 mb-1 text-sm font-semibold text-gray-500">
          {item.title}
        </div>
      )}
      {/* Render subitems if they exist */}
      {item.subitems?.map((subitem) => (
        <SubItem key={subitem.title} subitem={subitem} />
      ))}
    </div>
  );
}

/**
 * SubItem Component
 * Renders a clickable menu subitem with an optional icon
 */
function SubItem({ subitem }) {
  return (
    <a
      href="#"
      className="flex items-center px-1.5 py-1 gap-2 mb-1 text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
    >
      {subitem.icon && <subitem.icon className="w-3.5 h-3.5" />}
      <span className="text-sm">{subitem.title}</span>
    </a>
  );
}

// PropTypes validation
const menuItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  url: PropTypes.string,
  isHeader: PropTypes.bool,
  subitems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      url: PropTypes.string,
    })
  ),
});

StaticSidebar.propTypes = {
  menuItems: PropTypes.arrayOf(menuItemShape),
  className: PropTypes.string,
};

// PropTypes for the new components
MenuItem.propTypes = {
  item: menuItemShape.isRequired,
};

SubItem.propTypes = {
  subitem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    url: PropTypes.string,
  }).isRequired,
};
