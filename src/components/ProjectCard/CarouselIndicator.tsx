import React from "react";

type CarouselIndicatorProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  isActive: boolean;
  index: number;
};

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  onClick,
  disabled,
  isActive,
  index,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full transition-all disabled:opacity-50 ${
        isActive
          ? "bg-blue-400 w-6 h-2"
          : "bg-gray-500 hover:bg-gray-400 w-2 h-2"
      }`}
      aria-label={`Aller à l'image ${index + 1}`}
    />
  );
};

export default CarouselIndicator;
