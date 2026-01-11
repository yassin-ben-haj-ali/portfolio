import SkillsCard from "@/components/SkillsCard";
import { education, skills } from "@/Data/data";
import { Code2, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* EDUCATION */}
        <div className="mb-16 group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-blue-500/5 to-transparent p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/30">
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500/60 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                  <h4 className="font-bold text-blue-400 text-lg mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 font-medium">{edu.degree}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
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
export default About;
