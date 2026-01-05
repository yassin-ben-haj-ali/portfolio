import { Briefcase, Calendar } from "lucide-react";
import React from "react";
import TechTag from "./TechTag";

type ExperienceCardProps = {
  exp: {
    company: string;
    role: string;
    period: string;
    description: string;
    tech: string[];
    logo: string;
  };
  index: number;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  return (
    <div
      className={`w-full lg:w-[calc(50%-3rem)] cursor-pointer ${
        index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
      }`}
    >
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-6 rounded-3xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]">
          {/* Company Logo Placeholder */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
                <Briefcase className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  {exp.role}
                </h3>
                <p className="text-gray-400 font-medium">{exp.company}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{exp.period}</span>
            </div>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.tech.map((tech) => (
              <TechTag key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
