import MKBox from "components/MKBox";
import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import React from "react";
import ButtonMp from "commons/ButtonMp";

const Project = ({ title, description, tags, imgSrc, linkTo }) => {
  return (
    <Grid
      container
      spacing={2}
      marginTop={20}
      display="flex"
      justifyContent="space-between"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ textAlign: { xs: "center", md: "left" } }}
      >
        <div style={{ maxWidth: { xs: "100%" } }}>
          {/* {latestWork ? (
            <MKTypography variant="h5" mb={2}>
              Latest work
            </MKTypography>
          ) : (
            <></>
          )} */}
          <MKTypography variant="h1" mb={2}>
            {title}
          </MKTypography>
          <MKBox
            display="flex"
            flexDirection="row"
            whiteSpace="nowrap"
            mb={2}
            sx={{ justifyContent: { xs: "center", md: "left" } }}
            flexWrap="wrap"
            gap="1rem 0"
          >
            {tags.map((tag) => {
              return (
                <MKBox mr={1} bgColor="#A8B4FF">
                  <MKTypography variant="h5" m={0.5}>
                    {tag}
                  </MKTypography>
                </MKBox>
              );
            })}
          </MKBox>
          <MKTypography variant="h5" mb={5}>
            {description}
          </MKTypography>
          <ButtonMp title="see this project" linkRef={linkTo} />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: { xs: "center", },
          display: "flex",
          alignItems: "center",
        }}
      >
        <MKBox
          component="img"
          src={imgSrc}
          sx={{
            height: "100%",
            maxWidth: "100%",
            marginTop: { xs: "5vh", md: 0 },
            objectFit: "cover",
            height: "auto",
            width: "auto",
            mx: { xs: "auto", md: 0 }
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Project;
