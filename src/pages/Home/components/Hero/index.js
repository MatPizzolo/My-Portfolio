import React from "react";

import { Grid, Box, Typography } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import ButtonMp from "commons/ButtonMp";
import MKAvatar from "components/MKAvatar";

import mePng from "assets/imgs/me.jpeg";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  gradientText: {
    background: "-webkit-linear-gradient(0deg, purple, orange)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline",
  },
}));

const Hero = ({ darkMode }) => {
  const classes = useStyles();
  const theme = useTheme();

  const isXS = useMediaQuery(theme.breakpoints.down("xs"));
  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" height="80vh">
        <Grid
          item
          xs={12} // Use the entire width on small screens
          md={6} // Use half of the width on medium and larger screens
          justifyContent="center" // Horizontally center the avatar
          alignItems="center" // Vertically center the avatar
          display={{ xs: "block", md: "none" }}
          mt={12}
        >
          <MKAvatar
            src={mePng}
            sx={{ width: "35%", height: "35%", margin: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12} // Use the entire width on small screens
          md={6} // Use half of the width on medium and larger screens
        >
          <MKBox textAlign={{ xs: "center", md: "left" }}>
            {isMD ? (
              <Typography
                typography="h3"
                sx={{
                  marginTop: 4,
                  color: darkMode ? "white !important" : "black",
                }}
              >
                <span className={classes.gradientText}>Hello, I´m Mateo, </span>
                Software Developer
              </Typography>
            ) : (
              <>
                <Typography
                  typography={isLG ? "h2" : "h3"}
                >
                  <span className={classes.gradientText}>
                    Hello, I´m Mateo
                  </span>
                </Typography>
                <Typography
                  typography={isLG ? "h2" : "h3"}
                  sx={{
                    color: darkMode ? "white !important" : "dark",
                    whiteSpace: "nowrap"
                  }}
                >
                  Software Developer
                </Typography>
              </>
            )}
            <Box mt={2} />
            <ButtonMp
              darkMode={darkMode}
              title="RESUME"
              linkRef="https://drive.google.com/file/d/1zRi-f73-VKO72HJxXf5MrKyvbcGfYhUU/view?usp=sharing"
            />
          </MKBox>
        </Grid>
        <Grid
          item
          xs={12} // Use the entire width on small screens
          md={6} // Use half of the width on medium and larger screens
          alignItems="center" // Vertically center the avatar
          display={{ xs: "none", md: "flex" }}
          height="100%"
          justifyContent="center"
        >
          <MKBox
            component="img"
            src={mePng}
            height="80%"
            maxWidth="100%"
            sx={{ objectFit: "contain", borderRadius: "1.25rem" }}
          />
          {/* <MKAvatar src={mePng} sx={{ width: 350, height: 350, margin: "auto" }} /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
