import { X } from "lucide-react";
import React, { useState } from "react";
import CarouselControlButton from "./CarouselControlButton";

type ImageLightboxProps = {
  images: string[];
  currentIndex: number;
  handleClose: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
};

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  handleClose,
  handleNext,
  handlePrevious,
}) => {
  const [loading, setLoading] = useState(!images[currentIndex]);

  if (!images) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all z-50"
        aria-label="backToTop"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <CarouselControlButton
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            btnSide="left"
          />
          <CarouselControlButton
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            btnSide="right"
          />
        </>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
        onLoad={() => setLoading(false)}
      />

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};
export default ImageLightbox;
