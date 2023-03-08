import React from "react";

import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import ButtonMp from "commons/ButtonMp";

const Hero = () => {
  return (
    <>
      <Grid
        py="5vh"
        display="flex"
        flexDirection="column"
        sx={{
          maxWidth: { xs: "80%", lg: "50%" },
          textAlign: { xs: "center", md: "left" },
          margin: { xs: "auto", md: "15vh auto 0 0" },
        }}
      >
        <MKTypography variant="h1">
          Hi, I´m Mateo, <br /> Front End Developer
        </MKTypography>
        <MKTypography variant="h4" marginTop={1.5} marginBottom={2.5}>
          I build beautiful websites and apps for businesses around the globe.
        </MKTypography>
        <ButtonMp title="RESUME" linkRef="https://drive.google.com/file/d/1mMkB3kr_ogGk8_D8zWABNHOir5J5UwEB/view?usp=sharing" />
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
