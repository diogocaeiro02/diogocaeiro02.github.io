import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStackSlider from "./components/TechStackSlider/TechStackSlider";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer position="bottom-right" autoClose={3000} />
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
              <Route path="*" element={<NotFound />} />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;
