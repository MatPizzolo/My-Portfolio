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
import img1 from "assets/imgs/projectSabujcha.png";
import img2 from "assets/imgs/projectNetflix.png";

function Home() {
  return (
    <>
      <MKBox margin={2} bgColor="#EAECF9" sx={{ padding: "0 5rem" }}>
        <Navbar />
        <Hero />
      </MKBox>
      <MKBox sx={{ padding: "0 5rem" }} margin={2}>
        <Project title="Sabujcha" description="el piza sabe" tags={["Front End", "React", "HTML", "CSS"]} imgSrc={img1} latestWork={true} linkTo="/project-sabujcha"/>
        <Project title="Netflix Clone" description="el piza sabe" tags={["Front End", "React", "HTML", "CSS"]} imgSrc={img2} linkTo="/project-netflix"/>
        <MyStack />
      </MKBox>
      <Footer />
    </>
  );
}

export default Home;
