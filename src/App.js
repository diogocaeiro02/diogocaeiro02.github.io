import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStackSlider from "./components/TechStackSlider/TechStackSlider";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <TechStackSlider />
              <Projects />
              <Experience />
              <Contact />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
