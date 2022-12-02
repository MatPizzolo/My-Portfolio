import React from "react";
import MKBox from "components/MKBox";
import Navbar from "commons/Navbar";
import Hero from "./components/Hero";
import Footer from "commons/Footer/Footer";
import pageimg from "assets/imgs/sabujcha-screenshot.png";

const ProjectPage = ({ title, description, image, pageLink, repoLink }) => {
  return (
    <>
      <MKBox margin={2} bgColor="#EAECF9" sx={{ padding: { xs: "0 2rem", md: "0 5rem" } }}>
        <Navbar />
        <Hero
          title={title}
          description={description}
          pageLink={pageLink}
          repoLink={repoLink}
        />
      </MKBox>
      <MKBox textAlign="center">
        <MKBox
          maxWidth="70%"
          component="img"
          src={image}
          position="relative"
          bottom="15vh"
        />
      </MKBox>
      <Footer />
    </>
  );
};

export default ProjectPage;
