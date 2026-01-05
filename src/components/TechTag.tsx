import type React from "react";

type TechTagProps = {
  tech: string;
};

const TechTag: React.FC<TechTagProps> = ({ tech }) => {
  return (
    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/40 rounded-full text-xs font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all cursor-pointer">
      {tech}
    </span>
  );
};

export default TechTag;
