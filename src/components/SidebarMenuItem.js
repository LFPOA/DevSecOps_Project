const SidebarMenuItem = ({ item, onClick }) => {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors `}>
      <Icon size={20} className="mr-3" />
        {item.name}
    </button>
  );
};

export default SidebarMenuItem