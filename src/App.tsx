import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
