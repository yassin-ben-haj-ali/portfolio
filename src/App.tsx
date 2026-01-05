import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
    </div>
  );
};

export default App;
