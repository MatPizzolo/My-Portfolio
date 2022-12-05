import React from "react";

import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

const Hero = () => {
  return (
    <>
      <Grid
        paddingBottom="15vh"
        display="flex"
        flexDirection="column"
        sx={{
          maxWidth: { xs: "80%", lg: "50%" },
          textAlign: { xs: "center", md: "left" },
          margin: { xs: "15vh auto auto auto", md: "15vh auto 0 0" },
        }}
      >
        <MKTypography variant="h1">
          Hi, I´m Mateo, <br /> Full Stack Developer
        </MKTypography>
        <MKTypography variant="h4" marginTop={1.5} marginBottom={2.5}>
          I design and build beautiful websites and apps for businesses around
          the globe. If you need a modern and powerful website, send me an
          email. If we are a good fit, I will give you a time and cost estimate.
        </MKTypography>
        <div style={{ position: "relative" }}>
          <MKButton
            sx={{
              width: "200px",
              height: "60px",
              border: "2px solid black",
              position: "absolute",
              top: 15,
              left: 15,
              backgroundColor: "#EAECF9",
            }}
          />
          <MKButton
            color="black"
            sx={{ width: "200px", height: "60px" }}
            href="https://drive.google.com/file/d/1h1rtudmUM_48RZIhLYVJeErNy40YFxUF/view?usp=share_link"
            target="_blank"
          >
            Resume
          </MKButton>
        </div>
      </Grid>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div />
        <div style={{ display: "flex", position: "relative", top: 20 }}>
          <div
            style={{
              width: "2px",
              height: "100px",
              backgroundColor: "black",
            }}
          />
          <MKTypography
            variant="p"
            sx={{
              writingMode: "vertical-rl",
              marginLeft: 2,
              textTransform: "uppercase",
            }}
          >
            scroll
          </MKTypography>
        </div>
      </div>
    </>
  );
};

export default Hero;
