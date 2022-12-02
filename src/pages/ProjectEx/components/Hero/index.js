import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Hero = ({title, description, pageLink, repoLink}) => {
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
        <MKTypography variant="h1" textTransform="capitalize" my={3}>
          {title}
        </MKTypography>
        {/* <MKTypography variant="h4">
          {description}
        </MKTypography> */}
        <MKBox display="flex" justifyContent="center" mt={6}>
          <MKTypography
            variant="h4"
            sx={{
              marginRight: "1rem",
              fontWeight: "600",
              background: " linear-gradient(0, #A8B4FF 50%, transparent 50%)",
              cursor: "pointer",
            }}
          >
            <a target="_blank" href={pageLink} style={{color: "black", textDecoration: "none"}}>Visit live site</a>
          </MKTypography>
          <ArrowRightAltIcon
            alignItem="center"
            sx={{ marginTop: "auto" }}
            fontSize="medium"
          />
        </MKBox>
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
            <a target="_blank" href={repoLink} style={{color: "black", textDecoration: "none", whiteSpace: "nowrap"}}>Visit Repository</a>
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
