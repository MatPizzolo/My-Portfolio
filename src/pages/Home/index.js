import React from "react";
import { useState } from "react";

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

import Languages from "./components/Languages";

import ProjectCards from "./components/ProjectCards";

import lgBanner from "assets/imgs/banner-ddd/lg.png";
import lgBannerDark from "assets/imgs/banner-ddd/lg-dark.png";
import smBanner from "assets/imgs/banner-ddd/sm.png";
import smBannerDark from "assets/imgs/banner-ddd/sm-dark.png";
import xsBanner from "assets/imgs/banner-ddd/xs.png";
import xsBannerDark from "assets/imgs/banner-ddd/xs-dark.png";

import { useMediaQuery } from "@mui/material";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("changing dark mode: ", darkMode);
  };

  const isXsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSmBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isMdBreakpoint = useMediaQuery((theme) => theme.breakpoints.up("md"));

  let imgSrc = "";

  if (isXsBreakpoint) {
    imgSrc = darkMode ? xsBannerDark : xsBanner;
  } else if (isSmBreakpoint) {
    imgSrc = darkMode ? smBannerDark : smBanner;
  } else {
    // Default for lg or larger
    imgSrc = darkMode ? lgBannerDark : lgBanner;
  }

  return (
    <>
      <MKBox
        sx={{
          padding: { xs: "0 1rem", sm: "0 2rem", md: "0 5rem" },
          background: darkMode ? "#161513" : "#DDDDE3",
        }}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
      </MKBox>

      <MKBox
        sx={{
          background: darkMode ? "#161513" : "#DDDDE3",
          paddingTop: {
            xs: "6rem",
            sm: "2rem",
            md: "5rem",
            lg: "0rem",
            xl: "10rem",
          },
        }}
      />

      <MKBox
        sx={{
          position: "relative",
          height: { xs: "3vh", sm: "7vh", lg: "10vh" },
        }}
      >
        <MKBox
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(to right, purple, orange)",
            position: "absolute",
          }}
        />
        <MKBox
          component="img"
          src={imgSrc}
          alt="Banner"
          sx={{
            position: "absolute",
            top: "50%", // Position the image at the vertical middle
            left: 0,
            transform: "translateY(-50%)", // Center the image vertically
            zIndex: 2,
            width: "100%",
            objectFit: "fill",
          }}
        />
      </MKBox>

      <MKBox
        sx={{
          background: darkMode ? "#161513" : "#DDDDE3",
          paddingBottom: {
            xs: "4rem",
            sm: "6rem",
            md: "5rem",
            lg: "8rem",
            xl: "12rem",
          },
        }}
      />

      <MKBox
        sx={{
          padding: { xs: "0 1rem", sm: "0 2rem", md: "0 5rem" },
          background: darkMode ? "#161513" : "#DDDDE3",
        }}
      >
        <ProjectCards darkMode={darkMode} />
        <Languages darkMode={darkMode} />
        {/* <MyStack /> */}
        <Footer darkMode={darkMode} />
      </MKBox>
    </>
  );
}

export default Home;
