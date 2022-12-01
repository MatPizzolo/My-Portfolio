import React from 'react';

import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from 'components/MKButton';

const Hero = () => {
  return (
    <>
    <Grid
          marginTop="15vh"
          paddingBottom="15vh"
          maxWidth="50%"
          display="flex"
          flexDirection="column"
        >
          <MKTypography variant="h1">
            Hi, I´m Mateo, <br /> Full Stack Developer
          </MKTypography>
          <MKTypography variant="h4" marginTop={1.5} marginBottom={2.5}>
            I design and build beautiful websites and apps for businesses around
            the globe. If you need a modern and powerful website, send me an
            email. If we are a good fit, I will give you a time and cost
            estimate.
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
            <MKButton color="black" sx={{ width: "200px", height: "60px" }}>
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
  )
}

export default Hero