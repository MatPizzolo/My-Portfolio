import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
	gradientText: {
		background: "-webkit-linear-gradient(0deg, purple, orange)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		display: "inline",
	},
	darkModeButtonGroup: {
		'& .MuiButton-outlined': {
			borderColor: '#7B4AE2', // Border color for outlined buttons
		},
	},
	lightModeButtonGroup: {
		'& .MuiButton-outlined': {
			borderColor: '#A8B4FF', // Border color for outlined buttons
		},
	},
	darkModeButton: {
		color: 'black',
		'&.MuiButton-contained': {
			color: 'black',
			backgroundColor: 'rgba(123, 74, 226, 0.5)',
		},
		'&.MuiButton-outlined': {
			color: 'grey',
			borderColor: 'rgba(123, 74, 226, 0.5) ',
		},
	},

	lightModeButton: {
		color: 'black',
		'&.MuiButton-contained': {
			color: 'white',
			backgroundColor: '#344767 !important',
		},
		'&.MuiButton-outlined': {
			color: 'grey',
			borderColor: '#344767 !important',
		},
	},
}));

const TagSelector = ({ selectedTag, setSelectedTag, darkMode }) => {
	const classes = useStyles();

	const handleTagSelect = (tag) => {
		setSelectedTag(tag);
	};

	return (
		<Box mt={2}>
			<ButtonGroup variant="outlined" color="myviolet" className={darkMode ? classes.darkModeButtonGroup : classes.lightModeButtonGroup}>
				<Button
					onClick={() => handleTagSelect("all")}
					variant={selectedTag === "all" ? "contained" : "outlined"}
					className={darkMode ? classes.darkModeButton : classes.lightModeButton}
				>
					All
				</Button>
				<Button
					onClick={() => handleTagSelect("web")}
					variant={selectedTag === "web" ? "contained" : "outlined"}
					className={darkMode ? classes.darkModeButton : classes.lightModeButton}
				>
					Web
				</Button>
				<Button
					onClick={() => handleTagSelect("42")}
					variant={selectedTag === "42" ? "contained" : "outlined"}
					className={darkMode ? classes.darkModeButton : classes.lightModeButton}
				>
					42
				</Button>
			</ButtonGroup>
		</Box>
	)
}

export default TagSelector