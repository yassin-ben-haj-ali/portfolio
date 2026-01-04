type MobileNavItemProps = {
  item: {
    label: string;
    id: string;
  };
  isActive: boolean;
  onClick: () => void;
  delay: number;
  isMenuOpen: boolean;
};
const MobileNavItem: React.FC<MobileNavItemProps> = ({
  item,
  isActive,
  onClick,
  delay,
  isMenuOpen,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-2xl font-semibold transition-all duration-300 hover:text-blue-500 hover:scale-110 ${
        isActive
          ? "text-blue-500 scale-110"
          : "text-gray-700 dark:text-gray-300"
      }`}
      style={{
        transitionDelay: isMenuOpen ? `${delay}ms` : "0ms",
      }}
    >
      {item.label}
    </button>
  );
};
export default MobileNavItem;
