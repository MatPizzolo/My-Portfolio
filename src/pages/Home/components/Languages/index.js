import React from "react";
import Typography from "@mui/material/Typography";
import MKBox from "components/MKBox";
import { masterTechData, otherTechData } from "./components/techData";
import ImgInBox from "./components/ImgInBox/ImgInBox";

const Languages = ({ darkMode }) => {
  const TypographyComponent = ({ text }) => (
    <Typography
      variant="h2"
      mb={4}
      color={darkMode ? "white !important" : "#344767"}
      mt={16}
      >
      {text}
    </Typography>
  );
  return (
    <MKBox textAlign="center">
      <TypographyComponent text={"Technologies I master"} />
      <ImgInBox data={masterTechData} />
      <MKBox mt={2}/>
      <TypographyComponent text={"What I used for my projects"} />
      <ImgInBox data={otherTechData} />
    </MKBox>
  );
};

export default Languages;
