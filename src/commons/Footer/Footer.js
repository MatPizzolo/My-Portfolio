import MKTypography from "components/MKTypography";
import React from "react";
import MKBox from "components/MKBox";
import { Grid } from "@mui/material";
import Navbar from "commons/Navbar";

import { makeStyles } from "@mui/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const useStyles = makeStyles((theme) => ({
  gradientText: {
    background: "-webkit-linear-gradient(0deg, purple, orange)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline",
  },
  gradientArrow: {
    color: "linear-gradient(to right, purple, orange) !important",
    WebkitBackgroundClip: "text",
    // color: "transparent",
    display: "inline",
  },
}));

const Footer = ({ darkMode, toggleDarkMode }) => {
  const classes = useStyles();

  const handleClick = () => {
    const mailtoLink = `mailto:matpizzolo@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        paddingTop={20}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          background: darkMode ? "#090e15" : "#e2e3ee",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <MKTypography variant="h3" color={darkMode ? "white !important" : "#344767"}>Want to work?</MKTypography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "end" } }}
        >
          <MKTypography
            variant="h3"
            sx={{
              marginTop: { xs: "2rem", md: 0 },
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <span className={classes.gradientText}>Let's Work Together </span>
            <ArrowOutwardIcon sx={{ color: "orange" }} />
          </MKTypography>
        </Grid>
      </Grid>

      <MKBox
        sx={{
          width: "100%",
          height: "2px",
          background: darkMode ? "white" : "black",
        }}
      />

      <MKBox pb={4}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </MKBox>
    </>
  );
};

export default Footer;
