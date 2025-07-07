import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = ({ menuItems, selectedMenu, onMenuSelect, hideItems = [] }) => (
  <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
    <div className="p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          // 숨겨야 할 아이템들은 렌더링하지 않음
          if (hideItems.includes(item.name)) {
            return null;
          }
          return (
            <SidebarMenuItem
              key={item.name}
              item={item}
              isSelected={selectedMenu === item.name}
              onClick={() => onMenuSelect(item.name)}
            />
          );
        })}
      </nav>
    </div>
  </div>
);

export default Sidebar