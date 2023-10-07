import MKBox from "components/MKBox";
import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import React from "react";
import ButtonMp from "commons/ButtonMp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Project = ({ title, description, tags, imgSrc, linkTo, pageLink, repoLink }) => {
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
              return <MKBox mr={1}>{tag}</MKBox>;
            })}
          </MKBox>
          {/* <MKTypography variant="h5">
            {description}
          </MKTypography> */}
          {pageLink &&
          <MKBox display="flex" mt={2} sx={{ justifyContent: {xs: "center", md: "left"}}}>
            <MKTypography
              variant="h5"
              sx={{
                marginRight: "1rem",
                fontWeight: "500",
                background: " linear-gradient(0, #A8B4FF 50%, transparent 50%)",
                cursor: "pointer",
              }}
            >
              <a
                target="_blank"
                href={pageLink}
                style={{ color: "black", textDecoration: "none" }}
              >
                Visit live site
              </a>
            </MKTypography>
            <ArrowRightAltIcon
              alignItem="center"
              sx={{ marginTop: "auto" }}
              fontSize="medium"
            />
          </MKBox>
          }
          <MKBox display="flex" mt={3} sx={{ justifyContent: {xs: "center", md: "left"}}}>
            <MKTypography
              variant="h5"
              sx={{
                marginRight: "1rem",
                fontWeight: "500",
                background: " linear-gradient(0, #A8B4FF 50%, transparent 50%)",
                cursor: "pointer",
              }}
            >
              <a
                target="_blank"
                href={repoLink}
                style={{
                  color: "black",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Visit Repository
              </a>
            </MKTypography>
            <ArrowRightAltIcon
              alignItem="center"
              sx={{ marginTop: "auto" }}
              fontSize="medium"
            />
          </MKBox>
          {/* <ButtonMp title="see this project" linkRef={linkTo} /> */}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: { xs: "center" },
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
            mx: { xs: "auto", md: 0 },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Project;
