import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-10 md:py-12 px-4 border-t border-blue-500/20 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start text-sm md:text-base">
              <span>© 2025 YASSINE BEN HADJ ALI</span>
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              All rights reserved
            </p>
          </div>

          {/* Right Side - Back to Top */}
          <button onClick={scrollToTop} className="group relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
            <div className="relative flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-blue-500/20 border border-blue-500/30 rounded-full hover:bg-blue-500/30 hover:border-blue-500/50 transition-all backdrop-blur-sm">
              <span className="text-xs md:text-sm font-medium text-gray-300">
                Back to top
              </span>
              <ArrowUp className="text-blue-500 group-hover:-translate-y-1 transition-transform w-4 h-4 md:w-[18px] md:h-[18px]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
