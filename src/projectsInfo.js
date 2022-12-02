import sabujchapageimg from "assets/imgs/sabujcha-screenshot.png";
import netflixpageimg from "assets/imgs/netflix-screenshot.png";
import simplypageimg from "assets/imgs/simply-screenshot.png";
import img1 from "assets/imgs/projectSabujcha.png";
import img3 from "assets/imgs/projectNetflix.png";
import img2 from "assets/imgs/projectSimply.png";

export const projectsInfo = [
  {
    route: "project-sabujcha",
    title: "Sabujcha",
    description: "tuvi",
    image: sabujchapageimg,
    previewImage: img1,
    tags: ["Front End", "HTML", "CSS", "React"],
    pageLink: "https://sabujcha-landing-ecom-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/sabujcha_landing",
    latestWork: true
  },
  {
    route: "project-simply",
    title: "Simply Recipes",
    description: "tuvi",
    image: simplypageimg,
    previewImage: img2,
    tags: ["Front End", "HTML", "CSS", "React", "Gatsby"],
    pageLink: "https://mateopizzolo-simple-recipes.netlify.app",
    repoLink: "https://github.com/MatPizzolo/Simply-Recipes",
  },
  {
    route: "project-netflix",
    title: "Netflix Clone",
    description: "tuvi",
    image: netflixpageimg,
    previewImage: img3,
    tags: ["Front End", "HTML", "CSS", "React"],
    pageLink: "https://netflix-clone-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/netflix-clone",
  },
];
