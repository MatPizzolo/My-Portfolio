import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";

import cImage from "assets/imgs/languages/c.png";
import cplusplusImage from "assets/imgs/languages/c++.png";
import jsImage from "assets/imgs/languages/js.png";
import dockerImage from "assets/imgs/languages/docker.png";
import pythonImage from "assets/imgs/languages/python.jpg";

const CardWithBoxShadow = ({ title, imageUrl, darkMode }) => {
  const cardStyles = {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    width: "auto",
    maxWidth: "210px",
    minWidth: "180px",
    height: "100%",
    backgroundColor: darkMode ? "#1c1c22" : "#FFFF",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // Add your desired box shadow here
    borderRadius: "8px",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    textAlign: "center",
  };

  return (
    <Card sx={cardStyles}>
      <CardContent textAlign="center">
        <MKBox
          component="img"
          src={imageUrl}
          width="150px"
          height="150px"
          sx={{ objectFit: "contain" }}
        />
        {/* <Typography variant="h3" sx={{color: darkMode && "white !important"}}>
          {title}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

const Languages = ({ darkMode }) => {
  const languageData = [
    {
      title: "C",
      imageUrl: cImage,
    },
    {
      title: "C++",
      imageUrl: cplusplusImage,
    },
    {
      title: "Javascript",
      imageUrl: jsImage,
    },
    {
      title: "Docker",
      imageUrl: dockerImage,
    },
    {
      title: "Python",
      imageUrl: pythonImage,
    },
  ];

  return (
    <MKBox>
      <Typography
        variant="h2"
        sx={{
          color: darkMode ? "white !important" : "black",
        }}
      >
        What I master
      </Typography>
      <Grid
        container
        sx={{ justifyContent: { xs: "center", md: "space-between" } }}
        mt={6}
      >
        {languageData.map((language, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index} mt={2}>
            <CardWithBoxShadow
              title={language.title}
              imageUrl={language.imageUrl}
              darkMode={darkMode}
            />
          </Grid>
        ))}
      </Grid>
    </MKBox>
  );
};

export default Languages;
