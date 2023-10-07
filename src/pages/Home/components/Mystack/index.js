import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import React from "react";

const githubBadge =
  "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white";
const htmlBadge =
  "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
const cssBadge =
  "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
const jsBadge =
  "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E";
const reactBadge =
  "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB";
const reactRouterBadge =
  "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white";
const muiBadge =
  "https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white";
const chakraBadge =
  "https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white";
const gatsbyBadge =
  "https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white";
const nextBadge =
  "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white";
const firebaseBadge =
  "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase";
const cBadge =
  "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white";
const figmaBadge =
  "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white";

const MyStack = () => {
  return (
    <MKBox
      textAlign="center"
      pt={20}
      marginRight="auto"
      marginLeft="auto"
      sx={{ maxWidth: { xs: "100%", md: "90%", lg: "750px" } }}
    >
      <MKTypography my={5} variant="h2">
        FUll Stack Technologies and Skills
      </MKTypography>
      <MKBox
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        gap="2rem"
      >
        <img src={githubBadge} style={{ minHeight: "35px" }} />
        <img src={htmlBadge} style={{ minHeight: "35px" }} />
        <img src={cssBadge} style={{ minHeight: "35px" }} />
        <img src={jsBadge} style={{ minHeight: "35px" }} />
        <img src={reactBadge} style={{ minHeight: "35px" }} />
        <img src={reactRouterBadge} style={{ minHeight: "35px" }} />
        <img src={muiBadge} style={{ minHeight: "35px" }} />
        <img src={chakraBadge} style={{ minHeight: "35px" }} />
        <img src={gatsbyBadge} style={{ minHeight: "35px" }} />
        <img src={nextBadge} style={{ minHeight: "35px" }} />
        <img src={firebaseBadge} style={{ minHeight: "35px" }} />
        <img src={figmaBadge} style={{ minHeight: "35px" }} />

        {/* <img src={ReduxLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
          <img src={TsLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/> */}
      </MKBox>
    </MKBox>
  );
};

export default MyStack;
