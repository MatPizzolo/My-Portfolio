import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import Navbar from "commons/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Footer from "commons/Footer/Footer";
import MyStack from "./components/Mystack";

import { projectsInfo } from "projectsInfo";

function Home() {
  return (
    <>
      <MKBox
        margin={2}
        bgColor="#EAECF9"
        sx={{ padding: { xs: "0 1rem", sm: "0 2rem", md: "0 5rem" } }}
      >
        <Navbar />
        <Hero />
      </MKBox>
      <MKBox
        sx={{ padding: { xs: "0 1rem", sm: "0 2rem", md: "0 5rem" } }}
        margin={2}
      >
        {projectsInfo.map((project) => {
          console.log(project);

          return (
            <Project
              title={project.title}
              description={project.description}
              imgSrc={project.previewImage}
              linkTo={project.route}
              tags={project.tags}
            />
          );
        })}

        <MyStack />
      </MKBox>
      <Footer />
    </>
  );
}

export default Home;
