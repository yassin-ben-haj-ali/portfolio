import { Briefcase } from "lucide-react";
import { experiences } from "@/Data/data";
import ExperienceCard from "@/components/Navbar/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/30">
              <Briefcase className="text-purple-400" size={32} />
            </div>
            <h2 className="text-5xl font-bold">
              Professional{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-black z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md" />
                </div>

                {/* Content Card */}
                <ExperienceCard exp={exp} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
