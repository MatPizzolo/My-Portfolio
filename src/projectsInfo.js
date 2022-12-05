import sabujchapageimg from "assets/imgs/WholePageScreenshot/sabujcha-screenshot.png";
import netflixpageimg from "assets/imgs/WholePageScreenshot/netflix-screenshot.png";
import simplypageimg from "assets/imgs/WholePageScreenshot/simply-screenshot.png";
import niopageimg from "assets/imgs/WholePageScreenshot/nio-screenshot.png";
import img1 from "assets/imgs/ProjectScreens/projectNio.png";
import img2 from "assets/imgs/ProjectScreens/projectSabujcha.png";
import img3 from "assets/imgs/ProjectScreens/projectSimply.png";
import img4 from "assets/imgs/ProjectScreens/projectNetflix.png";

export const projectsInfo = [
  {
    route: "project-nio",
    title: "Nio",
    description: "A landing page for a restaurant",
    image: niopageimg,
    previewImage: img1,
    tags: ["Front End", "HTML", "CSS","JS", "React", "Material UI"],
    pageLink: "https://peppy-lollipop-508c19.netlify.app/",
    repoLink: "https://github.com/MatPizzolo/Nio-Resto",
    latestWork: true
  },
  {
    route: "project-sabujcha",
    title: "Sabujcha",
    description: "A landing page for a tea brand ecommerce",
    image: sabujchapageimg,
    previewImage: img2,
    tags: ["Front End", "HTML", "CSS", "JS", "React"],
    pageLink: "https://sabujcha-landing-ecom-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/sabujcha_landing"
  },
  {
    route: "project-simply",
    title: "Simply Recipes",
    description: "A simple recipe searcher app",
    image: simplypageimg,
    previewImage: img3,
    tags: ["Front End", "HTML", "CSS", "JS", "React", "Gatsby"],
    pageLink: "https://mateopizzolo-simple-recipes.netlify.app",
    repoLink: "https://github.com/MatPizzolo/Simply-Recipes",
  },
  {
    route: "project-netflix",
    title: "Netflix Clone",
    description: "A Netflix clone made with React",
    image: netflixpageimg,
    previewImage: img4,
    tags: ["Front End", "HTML", "CSS", "JS", "React"],
    pageLink: "https://netflix-clone-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/netflix-clone",
  },
];
