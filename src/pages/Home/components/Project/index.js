import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
import MKButton from 'components/MKButton';
import React from 'react'

const Project = ({title, description, tags, imgSrc, latestWork, linkTo}) => {
  return (
    <MKBox marginTop={20} display="flex" flexDirection="row" justifyContent="space-between">
        <MKBox>
            <div style={{maxWidth: "70%"}}>
            {latestWork ? <MKTypography variant="h5" mb={2}>Latest work</MKTypography> : <></>}
            <MKTypography variant="h1" mb={2}>{title}</MKTypography>
            <MKBox display="flex" flexDirection="row" whiteSpace="nowrap" mb={2}>
            {tags.map((tag) => {
                return (
                <MKBox mr={1} bgColor="#A8B4FF">
                    <MKTypography variant="h5" m={0.5}>{tag}</MKTypography>
                </MKBox>
                )
            })}
            </MKBox>
            <MKTypography variant="h5" mb={5}>{description}</MKTypography>
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
                <MKButton href={linkTo} color="black" sx={{ width: "200px", height: "60px" }}>
                see this project
                </MKButton>
            </div>
            </div>
        </MKBox>
        <MKBox>
            <MKBox component="img" src={imgSrc}/>
        </MKBox>
    </MKBox>
  )
}

export default Project