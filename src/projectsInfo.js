import sabujchapageimg from "assets/imgs/WholePageScreenshot/sabujcha-screenshot.png";
import netflixpageimg from "assets/imgs/WholePageScreenshot/netflix-screenshot.png";
import simplypageimg from "assets/imgs/WholePageScreenshot/simply-screenshot.png";
import niopageimg from "assets/imgs/WholePageScreenshot/nio-screenshot.png";
import ticpageimg from "assets/imgs/WholePageScreenshot/tictactoe-screenshot.png";
import codepageimg from "assets/imgs/WholePageScreenshot/codeeditor-screenshot.png";

import img1 from "assets/imgs/ProjectScreens/projectNio.png";
import img2 from "assets/imgs/ProjectScreens/projectSabujcha.png";
import img3 from "assets/imgs/ProjectScreens/projectSimply.png";
import img4 from "assets/imgs/ProjectScreens/projectNetflix.png";
import img5 from "assets/imgs/ProjectScreens/projectTicTacToe.png";
import img6 from "assets/imgs/ProjectScreens/projectCodeEditor.png";

export const projectsInfo = [
  {
    route: "project-nio",
    title: "Nio",
    description: "A landing page for a restaurant",
    image: niopageimg,
    previewImage: img1,
    tags: ["HTML", "CSS","JS", "React", "Material UI"],
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
    tags: ["HTML", "CSS", "JS", "React"],
    pageLink: "https://sabujcha-landing-ecom-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/sabujcha_landing"
  },
  {
    route: "project-simply",
    title: "Simply Recipes",
    description: "A simple recipe searcher app",
    image: simplypageimg,
    previewImage: img3,
    tags: ["HTML", "CSS", "JS", "React", "Gatsby"],
    pageLink: "https://mateopizzolo-simple-recipes.netlify.app",
    repoLink: "https://github.com/MatPizzolo/Simply-Recipes",
  },
  {
    route: "project-netflix",
    title: "Netflix Clone",
    description: "A Netflix clone made with React",
    image: netflixpageimg,
    previewImage: img4,
    tags: ["HTML", "CSS", "JS", "React"],
    pageLink: "https://netflix-clone-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/netflix-clone",
  },

  {
    route: "project-code-editor",
    title: "Online Code Editor",
    description: "A code editor with live preview",
    image: codepageimg,
    previewImage: img6,
    tags: ["HTML", "CSS", "JS"],
    pageLink: "https://mp-online-code-editor.netlify.app/",
    repoLink: "https://github.com/MatPizzolo/Online-Code-Editor"
  },
  {
    route: "project-tic-tac-toe",
    title: "Tic Tac Toe",
    description: "A simple Tic Tac Toe game",
    image: ticpageimg,
    previewImage: img5,
    tags: ["HTML", "CSS", "JS"],
    pageLink: "https://mp-tictactoe.netlify.app/",
    repoLink: "https://github.com/MatPizzolo/Tic-Tac-Toe",
  },
  
];
