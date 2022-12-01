import React from "react";

import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
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
        >
          my work
        </MKTypography>
        <MKTypography
          variant="h5"
          marginLeft={2}
          sx={{
            background: " linear-gradient(0, #A8B4FF 50%, transparent 50%)",
            cursor: "pointer",
          }}
        >
          get in touch
        </MKTypography>
      </Grid>
      <Grid item display="flex">
        <a target="_blank" href='https://github.com/MatPizzolo'><GitHubIcon fontSize="medium" color="black"/></a>
        <a target="_blank" href='https://www.linkedin.com/in/mateo-pizzolo'><LinkedInIcon fontSize="medium" color="black" sx={{marginLeft: 2, marginRight: 2}}/></a>
        <div style={{backgroundColor: "black", height: "1rem", width: "1px", margin: "auto"}}/>
        <LightModeIcon fontSize="medium" color="black" sx={{marginLeft: 2}}/>
      </Grid>
    </Grid>
  );
};

export default Navbar;
