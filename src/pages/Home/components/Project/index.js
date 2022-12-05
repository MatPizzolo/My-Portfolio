import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import React from "react";

const Project = ({ title, description, tags, imgSrc, linkTo }) => {
  return (
    <MKBox
      marginTop={20}
      display="flex"
      justifyContent="space-between"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <MKBox sx={{ textAlign: { xs: "center", md: "left" } }}>
        <div style={{ maxWidth: { xs: "100%", md: "70%" } }}>
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
            sx={{ justifyContent: { xs: "center", md: "none" } }}
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
          <div style={{ position: "relative" }}>
            <MKButton
              sx={{
                width: "200px",
                height: "60px",
                border: "2px solid black",
                position: "absolute",
                top: 15,
                left: 15,
                backgroundColor: "#EAECF9",
              }}
            />
            <MKButton
              href={linkTo}
              color="black"
              sx={{ width: "200px", height: "60px" }}
            >
              see this project
            </MKButton>
          </div>
        </div>
      </MKBox>
      <MKBox sx={{ textAlign: { xs: "center", md: 0 } }}>
        <MKBox
          component="img"
          src={imgSrc}
          sx={{
            height: "100%",
            maxWidth: "100%",
            marginTop: { xs: "5vh", md: 0 },
            objectFit: "cover"
          }}
        />
      </MKBox>
    </MKBox>
  );
};

export default Project;
