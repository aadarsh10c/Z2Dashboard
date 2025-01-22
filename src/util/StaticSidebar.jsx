import PropTypes from "prop-types";

export function StaticSidebar({ menuItems, className = "" }) {
  return (
    <aside className={`w-52 bg-white border-r border-gray-200 ${className}`}>
      <nav className="px-2 py-2">
        {menuItems.map((item) => (
          <div key={item.title} className={`mb-6 `}>
            {item.isHeader ? (
              <div className="px-2 mb-1 text-sm font-semibold text-gray-500">
                {item.title}
              </div>
            ) : null}
            {item.subitems?.map((subitem) => (
              <a
                key={subitem.title}
                href={subitem.url}
                className="flex items-center px-1.5 py-1 gap-2 mb-1 text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
              >
                {subitem.icon && <subitem.icon className="w-3.5 h-3.5" />}
                <span className="text-sm">{subitem.title}</span>
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
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
