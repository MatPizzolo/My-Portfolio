import React from 'react';
import MKBox from 'components/MKBox';
import Navbar from 'commons/Navbar';
import Hero from './components/Hero';
import Footer from 'commons/Footer/Footer';
import pageimg from "assets/imgs/netflix-screenshot.png";

const ProjectNetflix = () => {
  return (
    <>
    <MKBox margin={2} bgColor="#EAECF9" sx={{ padding: "0 5rem" }}>
        <Navbar />
        <Hero />
    </MKBox>
    <MKBox textAlign="center">
      <MKBox maxWidth="70%" component="img" src={pageimg} position="relative" bottom="15vh"/>
    </MKBox>
    <Footer />
    </>
  )
}

export default ProjectNetflix