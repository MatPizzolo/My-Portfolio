import sabujchapageimg from "assets/imgs/WholePageScreenshot/sabujcha-screenshot.png";
import netflixpageimg from "assets/imgs/WholePageScreenshot/netflix-screenshot.png";
import simplypageimg from "assets/imgs/WholePageScreenshot/simply-screenshot.png";
import niopageimg from "assets/imgs/WholePageScreenshot/nio-screenshot.png";
import ticpageimg from "assets/imgs/WholePageScreenshot/tictactoe-screenshot.png";
import codepageimg from "assets/imgs/WholePageScreenshot/codeeditor-screenshot.png";
import bashLogo from "assets/imgs/languages/bash-logo.png"

import img1 from "assets/imgs/ProjectScreens/projectNio.png";
import img2 from "assets/imgs/ProjectScreens/projectSabujcha.png";
import img3 from "assets/imgs/ProjectScreens/projectSimply.png";
import img4 from "assets/imgs/ProjectScreens/projectNetflix.png";
import img5 from "assets/imgs/ProjectScreens/projectTicTacToe.png";
import img6 from "assets/imgs/ProjectScreens/projectCodeEditor.png";
import cubGif from "assets/imgs/ProjectScreens/cub.gif";
import limechatImg from "assets/imgs/ProjectScreens/limechat-chat.png"

import { Box } from "@mui/material";

const htmlBadge = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
const cssBadge = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
const jsBadge = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E";
const reactBadge = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB";
const muiBadge = "https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white";
const gatsbyBadge = "https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white";
const cBadge = "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
const shellBadge = "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
const cplusplusBadge = "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
const nestjsBadge = "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"

const BoxImg = ({image}) => {
  return (
    <Box component="img" src={image} />
  )
}

export const projectsInfo = [
  {
    route: "",
    title: "Full Stack Project",
    description: "",
    image: null,
    previewImage: null,
    tags: [<BoxImg image={cplusplusBadge}/>],
    tagsObj: [jsBadge, reactBadge, muiBadge, nestjsBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/ft_irc",
    latestWork: true
  },
  {
    route: "",
    title: "IRC Server",
    description: "A IRC Server built with c++98",
    image: null,
    previewImage: limechatImg,
    tags: [<BoxImg image={cplusplusBadge}/>],
    tagsObj: [cplusplusBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/ft_irc",
    latestWork: true
  },
  {
    route: "",
    title: "Cub3D",
    description: "A game where you can move inside a maze",
    image: null,
    previewImage: cubGif,
    tags: [<BoxImg image={cBadge}/>],
    tagsObj: [cBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/cub3d",
    latestWork: true
  },
  {
    route: "",
    title: "Minishell",
    description: "Recreating the bash",
    image: bashLogo,
    previewImage: bashLogo,
    tags: [<BoxImg image={cBadge}/>, <BoxImg image={shellBadge}/>],
    tagsObj: [cBadge, shellBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/minishell",
    latestWork: true
  },
  {
    route: "project-nio",
    title: "Nio",
    description: "A landing page for a restaurant",
    image: niopageimg,
    previewImage: img1,
    tags: [<BoxImg image={jsBadge}/>, <BoxImg image={reactBadge} />, <BoxImg image={muiBadge}/>],
    tagsObj: [jsBadge, reactBadge, muiBadge],
    pageLink: "https://peppy-lollipop-508c19.netlify.app/",
    repoLink: "https://github.com/MatPizzolo/Nio-Resto",
  },
  {
    route: "project-sabujcha",
    title: "Sabujcha",
    description: "A landing page for a tea brand ecommerce",
    image: sabujchapageimg,
    previewImage: img2,
    tags: [<BoxImg image={jsBadge}/>, <BoxImg image={reactBadge} />],
    tagsObj: [jsBadge, reactBadge],
    pageLink: "https://sabujcha-landing-ecom-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/sabujcha_landing"
  },
  {
    route: "project-simply",
    title: "Simply Recipes",
    description: "A simple recipe searcher app",
    image: simplypageimg,
    previewImage: img3,
    tags: [<BoxImg image={jsBadge}/>, <BoxImg image={reactBadge} />, <BoxImg image={gatsbyBadge} />],
    tagsObj: [jsBadge, reactBadge, gatsbyBadge],
    pageLink: "https://mateopizzolo-simple-recipes.netlify.app",
    repoLink: "https://github.com/MatPizzolo/Simply-Recipes",
  },
  {
    route: "project-netflix",
    title: "Netflix Clone",
    description: "A Netflix clone made with React",
    image: netflixpageimg,
    previewImage: img4,
    tags: [<BoxImg image={jsBadge}/>, <BoxImg image={reactBadge} />],
    tagsObj: [jsBadge, reactBadge],
    pageLink: "https://netflix-clone-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/netflix-clone",
  },
  {
    route: "project-code-editor",
    title: "Online Editor",
    description: "A code editor with live preview",
    image: codepageimg,
    previewImage: img6,
    tags: [<BoxImg image={jsBadge}/>],
    tagsObj: [jsBadge],
    pageLink: "https://mp-online-code-editor.netlify.app/",
    repoLink: "https://github.com/MatPizzolo/Online-Code-Editor"
  },
  {
    route: "project-tic-tac-toe",
    title: "Tic Tac Toe",
    description: "A simple Tic Tac Toe game",
    image: ticpageimg,
    previewImage: img5,
    tags: [<BoxImg image={jsBadge}/>],
    tagsObj: [jsBadge],
    pageLink: "https://mp-tictactoe.netlify.app/",
    repoLink: "https://github.com/MatPizzolo/Tic-Tac-Toe",
  },
  
];
