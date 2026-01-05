import { Zap } from "lucide-react";
import React from "react";

type SkillsCardProps = {
  category: string;
  items: string[];
};

const SkillsCard: React.FC<SkillsCardProps> = ({ category, items }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Zap className="text-blue-400" size={20} />
        <h4 className="font-bold text-blue-400 text-lg">{category}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-sm font-medium hover:scale-105 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
