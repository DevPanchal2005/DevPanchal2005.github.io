// src/App.jsx
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth ">
      <Navbar />
      <main>
        <Landing />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>
  );
}
