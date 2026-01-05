import { Code2 } from "lucide-react";
import SkillsCard from "@/components/SkillsCard";
import { skills } from "@/Data/data";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/30">
                <Code2 className="text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-center">
                Technical Skills
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <SkillsCard key={category} category={category} items={items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
