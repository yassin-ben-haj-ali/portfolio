import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
