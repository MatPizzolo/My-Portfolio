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
            background: darkMode ? "none " : "linear-gradient(0, #A8B4FF 50%, transparent 50%)",
            cursor: "pointer",
            color: darkMode ? "rgba(123, 74, 226, 0.75)" : "#344767",
          }}
          component={Link}
          to="/"
        >
          My work
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
          <GitHubIcon fontSize="medium"
            sx={{ color: darkMode ? "#7B4AE2" : "#344767  !important" }} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mateo-pizzolo"
          style={{ display: "flex" }}
        >
          <LinkedInIcon
            fontSize="medium"
            sx={{ marginLeft: 2, color: darkMode ? "#7B4AE2" : "#344767 !important" }}
          />
        </a>
        <div
          style={{
            backgroundColor: darkMode ? "#7B4AE2" : "#344767",
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
            <DarkModeIcon
              fontSize="medium"
              sx={{ cursor: "pointer", color: "#344767" }}
            />
          ) : (
            <LightModeIcon
              fontSize="medium"
              sx={{ cursor: "pointer", color: "#7B4AE2" }}
            />
          )}
        </button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
