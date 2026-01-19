import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ImageLightbox from "@/components/ProjectCard/ImageLightBox";
import { projects } from "@/Data/data";
import { useState, useEffect, useCallback } from "react";

type LightboxState = {
  images: string[] | null;
  currentIndex: number;
};

const Projects = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    images: null,
    currentIndex: 0,
  });

  const openLightbox = useCallback((images: string[], startIndex: number) => {
    setLightbox({ images, currentIndex: startIndex });
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setLightbox({ images: null, currentIndex: 0 });
    document.body.style.overflow = "auto";
  }, []);

  const handleNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev.images) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length,
      };
    });
  }, []);

  const handlePrevious = useCallback(() => {
    setLightbox((prev) => {
      if (!prev.images) return prev;
      return {
        ...prev,
        currentIndex:
          prev.currentIndex === 0
            ? prev.images.length - 1
            : prev.currentIndex - 1,
      };
    });
  }, []);

  useEffect(() => {
    if (!lightbox.images) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox.images]);

  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onImageClick={openLightbox}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found</p>
          </div>
        )}
      </div>

      {lightbox.images && (
        <ImageLightbox
          images={lightbox.images}
          currentIndex={lightbox.currentIndex}
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
    </section>
  );
};

export default Projects;
