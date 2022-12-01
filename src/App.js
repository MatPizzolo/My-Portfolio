import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ProjectPage from "pages/Project";
import ProjectSabujcha from "pages/ProjectSabujcha";
import ProjectNetflix from "pages/ProjectNetflix";
import ProjectSimply from "pages/ProjectSimply";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-sabujcha" element={<ProjectSabujcha />} />
      <Route path="/project-netflix" element={<ProjectNetflix />} />
      <Route path="/project-simply" element={<ProjectSimply />} />
    </Routes>
  );
}

export default App;
