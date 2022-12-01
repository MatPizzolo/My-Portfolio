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
        sx={{ padding: "5rem 5rem 10rem 5rem" }}
        display="flex"
        justifyContent="space-between"
        marginTop={20}
      >
        <MKTypography width="50%" variant="h1">
          Want to work?
        </MKTypography>
        {/* <MKTypography variant="p">
              All rights reserved
            </MKTypography> */}

        <MKTypography width="50%" variant="h4">
          If you need a modern and powerful website for your business, startup
          or personally, I am available for work. You can email me directly at
          matpizzolo@gmail.com.
        </MKTypography>
      </MKBox>
    </>
  );
};

export default Footer;
