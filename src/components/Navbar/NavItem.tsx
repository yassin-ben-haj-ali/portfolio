type NavItemProps = {
  item: { id: string; label: string };
  isActive: boolean;
  onClick: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ item, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? "text-blue-500"
          : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
      }`}
    >
      {item.label}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
      )}
    </button>
  );
};

export default NavItem;
