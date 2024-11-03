import Header from "./components/header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Thought from "./components/Thought";
import Projects from "./components/Projects";
import About from "./components/About";
import LastSection from "./components/LastSection";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Thought />
      <Projects />
      <About />
      <LastSection />
    </div>
  );
};

export default App;
