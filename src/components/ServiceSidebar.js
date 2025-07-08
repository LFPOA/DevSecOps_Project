import { Link } from "react-router-dom";
import SidebarMenuItem from "./SidebarMenuItem";

function ServiceSidebar ( {menuItems} ) {
    return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          return (
            <Link to={item.path}
                  key={item.name}
            >
              <SidebarMenuItem
              key={item.name}
              item={item}
              />
            </Link>
          );
        })}
      </nav>
    </div>
  </div>
  )
}

export default ServiceSidebar;