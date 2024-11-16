import "./index.css";
import Navbar from "./Componenets/Navbar";
import Home from "./Componenets/Home";
import Skills from "./Componenets/Skills";
import Projects from "./Componenets/Projects";
import Contact from "./Componenets/Contact";
import Footer from "./Componenets/Footer";


function App() {
  return (
    <div className="selection:bg-white selection:text-black">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
