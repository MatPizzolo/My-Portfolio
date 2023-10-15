import React, { useEffect, useState } from "react";
import { Grid, Box, Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { projectsInfo } from "projectsInfo";
import useMediaQuery from '@mui/material/useMediaQuery';
import TagSelector from "./components/TagSelector/TagSelector";
import ProjectCard from "./components/ProjectCard";

const useStyles = makeStyles((theme) => ({
	gradientText: {
		background: "-webkit-linear-gradient(0deg, purple, orange)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		display: "inline",
	},
}));

const ProjectCards = ({ darkMode }) => {
	const classes = useStyles();
	const isMdBreakpoint = useMediaQuery((theme) => theme.breakpoints.up('md'));
	const typographyVariant = isMdBreakpoint ? 'h2' : 'h3';
	const [selectedTag, setSelectedTag] = useState("all");
	const [selectedTech, setSelectedTech] = useState(null);

	const filteredProjects = projectsInfo.filter((project) => {
		const tagMatch = project.tags.includes(selectedTag);
		let techMatch = false;
		if (selectedTech !== null) {
		  techMatch = project.tagTech.includes(selectedTech) && tagMatch;
		} else {
			techMatch = true;
		}
		return tagMatch && techMatch;
	  });

	return (
		<MKBox>
			<Box display="flex" justifyContent="space-between">
				<MKTypography
					variant={typographyVariant}
					sx={{
						color: darkMode ? "white !important" : "black",
					}}
				>
					<span className={classes.gradientText}>Selected Projects </span>
				</MKTypography>
				<TagSelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
			</Box>
			<Grid
				container
				spacing={{ xs: 4, md: 6, lg: 10 }}
				justifyContent="center"
				pt={6}
			>
				{filteredProjects.map((project) => {

					return (
						<ProjectCard
							title={project.title}
							description={project.description}
							imageSrc={project.previewImage}
							repoLink={project.repoLink}
							// pageLink={project.pageLink}
							darkMode={darkMode}
							tags={project.tagTech}
							selectedTech={selectedTech}
							setSelectedTech={setSelectedTech}
						/>
					);
				})}
			</Grid>
		</MKBox>
	);
};

export default ProjectCards;
