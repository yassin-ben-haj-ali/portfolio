import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";

type CarouselControlButtonProps = {
  btnSide: "left" | "right";
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CarouselControlButton: React.FC<CarouselControlButtonProps> = ({
  disabled = false,
  btnSide,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 disabled:opacity-50 ${
        btnSide == "left" ? "left-2" : "right-2"
      }`}
      aria-label={btnSide == "left" ? "prevImage" : "nextImage"}
    >
      {btnSide === "left" ? (
        <ChevronLeft className="w-6 h-6" />
      ) : (
        <ChevronRight className="w-6 h-6" />
      )}
    </button>
  );
};

export default CarouselControlButton;
