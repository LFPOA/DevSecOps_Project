const SidebarMenuItem = ({ item, isSelected, onClick }) => {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
        isSelected
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} className="mr-3" />
      {item.name}
    </button>
  );
};

export default SidebarMenuItem