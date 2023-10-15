import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/material/styles";
import MKTypography from "components/MKTypography";
import { Grid, Box, Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import MKBox from "components/MKBox";


const ProjectCard = ({
	imageSrc,
	title,
	description,
	darkMode,
	repoLink,
	pageLink,
	tags,
	selectedTech,
	setSelectedTech,
}) => {
	let cardStyles = {
		height: "300px",
		display: "flex",
		flexDirection: "column",
		border: "2px solid",
		borderColor: darkMode ? "#f2eee2" : "#808080",
		borderRadius: "2rem",
		background: "transparent"
	};
	
	const buttonStyle = {
		padding: '6px', // Adjust the padding for your smaller button
		margin: "0",
		fontSize: '10px',   // Adjust the font size for your smaller button
		color: "black",
		height: "20px",
		maxHeight: "20px",
		minHeight: "20px",
		borderColor: darkMode ? "#E1E8E8" : "#CCCCCC",
		backgroundColor: darkMode ? "rgb(225, 232, 232, 0.5)" : "#cccccc",
		variant: "outlined"
	};

	const buttonSelectedStyle = {
		padding: '6px', // Adjust the padding for your smaller button
		margin: "0",
		fontSize: '10px',   // Adjust the font size for your smaller button
		color: "black",
		height: "20px",
		maxHeight: "20px",
		minHeight: "20px",
		borderColor: darkMode ? "#f2eee2" : "#808080",
		backgroundColor: darkMode ? "#cccccc" : "#B0BEC5",
		variant: "contained"
	};

	const textColorChangeDarkMode = {
		color: darkMode ? "#E1E8E8" : "#808080",
	}

	const theme = useTheme();
	const isLG = useMediaQuery(theme.breakpoints.up("lg"));
	const isNotMD = useMediaQuery(theme.breakpoints.down("md"));

	const handleTechChange = (tag) => {
		if (tag === selectedTech)
			setSelectedTech(null);
		else
			setSelectedTech(tag);
	}

	return (
		<Grid item xs={12} sm={6} xl={4}>
			<Box sx={cardStyles} overflow="hidden">
				<Box m="1rem" >
					<MKTypography style={textColorChangeDarkMode} variant="h5" sx={{fontWeight: 450}}> {title} </MKTypography>
					<MKTypography style={textColorChangeDarkMode} variant="h6"> {description} </MKTypography>
					<Box display="flex" width="100%" flexWrap="wrap" gap={1} mt={4} mb={2}>
						{tags.map((tag, index) => (
							<Button
								key={index}
								onClick={() => handleTechChange(tag)}
								style={selectedTech === tag ? buttonSelectedStyle : buttonStyle}
							>
								{tag}
							</Button>
						))}
					</Box>
					<MKBox
						component="img"
						src={imageSrc}
						sx={{
							width: "100%",
							backgroundSize: "cover",
							objectFit: "cover",
							borderRadius: "1rem",
							// backgroundColor: "grey",
							// height: { xs: "200px", md: "300px" },
							// minHeight: { xs: "200px", md: "300px" },
							maxHeight: "100%",
							overflow: "hidden"
						}}
					/>

				</Box>
			</Box>
		</Grid>
	);
};

export default ProjectCard;