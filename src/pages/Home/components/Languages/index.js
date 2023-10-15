import React from "react";
import Typography from "@mui/material/Typography";
import MKBox from "components/MKBox";
import { masterTechData, otherTechData } from "./components/techData";
import ImgInBox from "./components/ImgInBox/ImgInBox";

const Languages = ({ darkMode }) => {
  const TypographyComponent = ({ text }) => (
    <Typography
      variant="h3"
      mb={4}
      color={darkMode ? "white !important" : "black"}
    >
      {text}
    </Typography>
  );
  return (
    <MKBox>
      <TypographyComponent text={"Technologies I master"} />
      <ImgInBox data={masterTechData} />
      <MKBox mt={2}/>
      <TypographyComponent text={"What I used for my projects"} />
      <ImgInBox data={otherTechData} />
    </MKBox>
  );
};

export default Languages;
