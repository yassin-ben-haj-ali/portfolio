import { ZoomIn } from "lucide-react";
import React, { useEffect, useState } from "react";
import CarouselIndicator from "./CarouselIndicator";
import CarouselControlButton from "./CarouselControlButton";

type Project = {
  title: string;
  description: string;
  tech: string[];
  media: {
    type: string;
    images: string[];
  };
};

type LoadedImagesType = {
  [key: number]: boolean;
};

type ProjectCardProps = {
  project: Project;
  onImageClick: (images: string[], currentImageIndex: number) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onImageClick }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<LoadedImagesType>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload all images for this project
  useEffect(() => {
    project.media.images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [index]: true }));
      };
      img.src = src;
    });
  }, [project.media.images]);

  const changeImage = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newIndex = (currentImage + 1) % project.media.images.length;
    changeImage(newIndex);
  };

  const prevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newIndex =
      currentImage === 0 ? project.media.images.length - 1 : currentImage - 1;
    changeImage(newIndex);
  };

  return (
    <div className="group bg-white dark:bg-gray-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 dark:border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] shadow-lg">
      {/* Media Section - Carousel */}
      <div className="relative h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {/* Loading Placeholder */}
        {!imagesLoaded[currentImage] && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}

        <img
          src={project.media.images[currentImage]}
          alt={`${project.title} - Image ${currentImage + 1}`}
          className={`w-full h-full object-cover cursor-zoom-in transition-opacity duration-300 ${
            imagesLoaded[currentImage] ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => onImageClick(project.media.images, currentImage)}
          loading="lazy"
        />

        {/* Zoom Icon Indicator */}
        <div className="absolute top-2 left-2 bg-gray-900/80 dark:bg-gray-800/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <ZoomIn className="w-4 h-4" />
        </div>

        {/* Carousel Controls */}
        {project.media.images.length > 1 && (
          <>
            <CarouselControlButton
              onClick={prevImage}
              disabled={isTransitioning}
              btnSide="left"
            />
            <CarouselControlButton
              onClick={nextImage}
              disabled={isTransitioning}
              btnSide="right"
            />

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.media.images.map((_, idx) => (
                <CarouselIndicator
                  key={idx}
                  index={idx}
                  isActive={idx == currentImage}
                  disabled={isTransitioning}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeImage(idx);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-500 mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-600 dark:text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
