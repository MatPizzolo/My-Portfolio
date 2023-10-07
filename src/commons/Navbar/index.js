import React from "react";

import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MKButton from "components/MKButton";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent={"space-between"}
      pt={5}
    >
      <Grid item display="flex">
        <MKTypography
          variant="h5"
          sx={{
            background: " linear-gradient(0, #A8B4FF 50%, transparent 50%)",
            cursor: "pointer",
          }}
          component={Link}
          to="/"
          color={darkMode ? "white" : "black"}
        >
          my work
        </MKTypography>
        {/* <MKTypography
          variant="h5"
          marginLeft={2}
          sx={{
            background: " linear-gradient(0, #A8B4FF 50%, transparent 50%)",
            cursor: "pointer",
          }}
        >
          get in touch
        </MKTypography> */}
      </Grid>
      <Grid item display="flex" alignItems="center">
        <a
          target="_blank"
          href="https://github.com/MatPizzolo"
          style={{ display: "flex" }}
        >
          <GitHubIcon fontSize="medium" color={darkMode ? "white" : "black"} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mateo-pizzolo"
          style={{ display: "flex" }}
        >
          <LinkedInIcon
            fontSize="medium"
            color={darkMode ? "white" : "black"}
            sx={{ marginLeft: 2 }}
          />
        </a>
        <div
          style={{
            backgroundColor: darkMode ? "white" : "black",
            height: "1rem",
            width: "2px",
            margin: "auto 15px",
          }}
        />
        <button
          onClick={toggleDarkMode}
          style={{
            background: "transparent",
            border: "none",
            display: "flex",
          }}
        >
          {!darkMode ? (
            <LightModeIcon
              fontSize="medium"
              color="black"
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <DarkModeIcon
              fontSize="medium"
              color="white"
              sx={{ cursor: "pointer" }}
            />
          )}
        </button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
