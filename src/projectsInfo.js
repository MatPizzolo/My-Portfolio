import sabujchapageimg from "assets/imgs/WholePageScreenshot/sabujcha-screenshot.png";
import netflixpageimg from "assets/imgs/WholePageScreenshot/netflix-screenshot.png";
import simplypageimg from "assets/imgs/WholePageScreenshot/simply-screenshot.png";
import niopageimg from "assets/imgs/WholePageScreenshot/nio-screenshot.png";
import ticpageimg from "assets/imgs/WholePageScreenshot/tictactoe-screenshot.png";
import codepageimg from "assets/imgs/WholePageScreenshot/codeeditor-screenshot.png";
import bashLogo from "assets/imgs/tech-stack/bash.png"

import img1 from "assets/imgs/ProjectScreens/projectNio.png";
import img2 from "assets/imgs/ProjectScreens/projectSabujcha.png";
import img3 from "assets/imgs/ProjectScreens/projectSimply.png";
import img4 from "assets/imgs/ProjectScreens/projectNetflix.png";
import img5 from "assets/imgs/ProjectScreens/projectTicTacToe.png";
import img6 from "assets/imgs/ProjectScreens/projectCodeEditor.png";
import cubGif from "assets/imgs/ProjectScreens/cub.gif";
import limechatImg from "assets/imgs/ProjectScreens/limechat-chat.png"
import inceptionImg from "assets/imgs/ProjectScreens/inception.png"
import amazonImg from "assets/imgs/ProjectScreens/amazonClone.png"

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
const dockerBadge = "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
const wordpressBadge = "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white"
const mariadbBagde = "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
const nginxBadge = "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"
const mongoBadge = "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
const reduxBadge = "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
const chatgptBadge = "https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white"
const web3Badge = "https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white"
const solidityBadge = "https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white"
const rubyonrailsBadge = "https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white"


const BoxImg = ({image}) => {
  return (
    <Box component="img" src={image} />
  )
}
// ADD a rest api project / Trascendence as on going?
export const projectsInfo = [
  {
    route: "",
    title: "Ruby",
    description: "",
    image: null,
    previewImage: img3,
    tags: ["all", "web"],
    tagsObj: [dockerBadge, mongoBadge, rubyonrailsBadge, reactBadge, muiBadge],
    pageLink: null,
    repoLink: "-",
    latestWork: true,
    tagTech: ["Docker", "MongoDB", "Ruby on Rails", "React", "Material-UI"],
  },
  {
    route: "",
    title: "Amazon Clone",
    description: "",
    image: null,
    previewImage: amazonImg,
    tags: ["all", "web"],
    tagsObj: [dockerBadge, mongoBadge, nestjsBadge, reactBadge, reduxBadge, muiBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/Amazon-clone",
    latestWork: true,
    tagTech: ["Docker", "MongoDB", "NestJS", "React", "Redux", "Material-UI"],
  },
  {
    route: "",
    title: "web3",
    description: "web3 project",
    image: null,
    previewImage: img3,
    tags: ["all", "web"],
    tagsObj: [solidityBadge, reactBadge, muiBadge, web3Badge],
    pageLink: null,
    repoLink: "",
    latestWork: true,
    tagTech: ["Solidity", "React", "Material-UI", "Web3"],
  },
  {
    route: "",
    title: "Inception",
    description: "",
    image: null,
    previewImage: inceptionImg,
    tags: ["all", "42"],
    tagsObj: [dockerBadge, mariadbBagde, wordpressBadge, nginxBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/Inception",
    latestWork: true,
    tagTech: ["Docker", "MariaDB", "WordPress", "Nginx"],
  },
  {
    route: "",
    title: "IRC Server",
    description: "A IRC Server built with c++98",
    image: null,
    previewImage: limechatImg,
    tags: ["all", "42"],
    tagsObj: [cplusplusBadge, chatgptBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/ft_irc",
    latestWork: true,
    tagTech: ["C++", "ChatGPT"],
  },
  {
    route: "",
    title: "Minishell",
    description: "Recreating the bash",
    image: bashLogo,
    previewImage: bashLogo,
    tags: ["all", "42"],
    tagsObj: [cBadge, shellBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/minishell",
    latestWork: true,
    tagTech: ["C", "Shell"],
  },
  {
    route: "",
    title: "Cub3D",
    description: "A game where you can move inside a maze",
    image: null,
    previewImage: cubGif,
    tags: ["all", "42"],
    tagsObj: [cBadge],
    pageLink: null,
    repoLink: "https://github.com/MatPizzolo/cub3d",
    latestWork: true,
    tagTech: ["C"],
  },
  {
    route: "project-simply",
    title: "Simply Recipes",
    description: "A recipe searcher app",
    image: simplypageimg,
    previewImage: img3,
    tags: ["all", "web"],
    tagsObj: [jsBadge, reactBadge, gatsbyBadge],
    pageLink: "https://mateopizzolo-simple-recipes.netlify.app",
    repoLink: "https://github.com/MatPizzolo/Simply-Recipes",
    tagTech: ["JavaScript", "React", "Gatsby"],
  },
  {
    route: "project-netflix",
    title: "Netflix Clone",
    description: "A Netflix clone made with React",
    image: netflixpageimg,
    previewImage: img4,
    tags: ["all", "web"],
    tagsObj: [jsBadge, reactBadge],
    pageLink: "https://netflix-clone-mp.netlify.app",
    repoLink: "https://github.com/MatPizzolo/netflix-clone",
    tagTech: ["JavaScript", "React"],
  },
  {
    route: "project-nio",
    title: "Nio",
    description: "A landing page for a restaurant",
    image: niopageimg,
    previewImage: img1,
    tags: ["all", "web"],
    tagsObj: [jsBadge, reactBadge, muiBadge],
    pageLink: "https://peppy-lollipop-508c19.netlify.app/",
    repoLink: "https://github.com/MatPizzolo/Nio-Resto",
    tagTech: ["JavaScript", "React", "Material-UI"],
  },
  {
    route: "project-tic-tac-toe",
    title: "Tic Tac Toe",
    description: "A simple Tic Tac Toe game",
    image: ticpageimg,
    previewImage: img5,
    tags: ["all", "web"],
    tagsObj: [jsBadge],
    pageLink: "https://mp-tictactoe.netlify.app/",
    repoLink: "https://github.com/MatPizzolo/Tic-Tac-Toe",
    tagTech: ["JavaScript"],
  },
];
