import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import { SvgIcon } from "@mui/material";
import MaterialLogo from "assets/imgs/logos/materialLogo.svg";
import HtmlLogo from "assets/imgs/logos/htmlLogo.svg";
import CssLogo from "assets/imgs/logos/cssLogo.svg";
import GatsbyLogo from "assets/imgs/logos/gatsbyLogo.svg";
import JsLogo from "assets/imgs/logos/jsLogo.svg";
import TsLogo from "assets/imgs/logos/tsLogo.svg";
import ReactLogo from "assets/imgs/logos/reactLogo.svg";
import ReduxLogo from "assets/imgs/logos/reduxLogo.svg";

const MyStack = () => {
  return (
    <MKBox
      textAlign="center"
      mt={20}
      marginRight="auto"
      marginLeft="auto"
      sx={{ maxWidth: { xs: "100%", md: "90%", lg: "750px" } }}
    >
      <MKTypography my={5} variant="h2">
        Technologies and Skills
      </MKTypography>
      <MKBox display="flex" justifyContent="space-around" flexWrap="wrap" gap="2rem">
          <GitHub color="black" sx={{ height: "35px", width: "35px", margin: "0 0.5rem" }} />
          <img src={HtmlLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
          <img src={CssLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
          <img src={JsLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
          <img src={MaterialLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
          <img src={ReactLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
          <img src={GatsbyLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
          <img src={ReduxLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
          <img src={TsLogo} height="35px" width="35px" style={{margin: "0 0.5rem"}}/>
      </MKBox>
    </MKBox>
  );
};

export default MyStack;
