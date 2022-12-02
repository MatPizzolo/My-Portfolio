import MKTypography from "components/MKTypography";
import React from "react";
import MKBox from "components/MKBox";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <MKBox
        bgColor="#EAECF9"
        margin={2}
        display="flex"
        justifyContent="space-between"
        marginTop={20}
        sx={{
          padding: { xs: "2rem", md: "5rem" },
          flexDirection: { xs: "column", md: "row" },
          textAlign: {xs: "center", md: "left"},
        }}
      >
        <MKTypography variant="h2" sx={{ width: { xs: "100%", md: "50%" } }}>
          Want to work?
        </MKTypography>
        {/* <MKTypography variant="p">
              All rights reserved
            </MKTypography> */}

        <MKTypography variant="h5" sx={{ width: { xs: "100%", md: "50%" }, marginTop: {xs: "2rem", md: 0} }}>
          If you need a modern and powerful website for your business, startup
          or personally, I am available for work. You can email me directly at
          matpizzolo@gmail.com.
        </MKTypography>
      </MKBox>
    </>
  );
};

export default Footer;
