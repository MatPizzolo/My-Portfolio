import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <MKBox
        textAlign="center"
        marginTop="10vh"
        paddingBottom="25vh"
        maxWidth="60%"
        marginLeft="auto"
        marginRight="auto"
      >
        <MKTypography
          variant="h6"
          textTransform="uppercase"
          color="rgba(0, 0, 0, 0.35)"
        >
          project showcase
        </MKTypography>
        <MKTypography variant="h1" textTransform="capitalize" my={3}>
          Simply Recipes
        </MKTypography>
        <MKTypography variant="h4">
          This is a homepage design and build for a concept project – a chat
          application. I have designed the page first then later built a
          responsive page in Webflow.
        </MKTypography>
        <MKBox display="flex" justifyContent="center" mt={3}>
          <MKTypography
            variant="h4"
            sx={{
              marginRight: "1rem",
              fontWeight: "600",
              background: " linear-gradient(0, #A8B4FF 50%, transparent 50%)",
              cursor: "pointer",
            }}
          >
            <a target="_blank" href='https://mateopizzolo-simple-recipes.netlify.app' style={{color: "black", textDecoration: "none"}}>Visit live site</a>
          </MKTypography>
          <ArrowRightAltIcon
            alignItem="center"
            sx={{ marginTop: "auto" }}
            fontSize="medium"
          />
        </MKBox>
      </MKBox>
    </>
  );
};

export default Hero;
