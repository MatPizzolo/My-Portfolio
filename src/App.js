import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "pages/ProjectEx";

import { projectsInfo } from "projectsInfo";
import { ThemeProvider } from "@mui/material";
import theme from "assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        {projectsInfo.map((project) => {
          return (
            <Route path={project.route} element={<ProjectPage title={project.title} description={project.description} image={project.image} pageLink={project.pageLink} repoLink={project.repoLink} />} />
          )
        })}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
