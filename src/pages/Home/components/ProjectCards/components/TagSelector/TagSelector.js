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
	buttonGroup: {
		'& .MuiButton-outlined': {
			borderColor: '#84047E', // Border color for outlined buttons
		},
	},
	button: {
		color: 'black',
		'&.MuiButton-contained': {
			color: 'white',
			backgroundColor: '#84047E',
		},
		'&.MuiButton-outlined': {
			color: 'grey',
		},
	},
}));

const TagSelector = ({selectedTag, setSelectedTag}) => {
	const classes = useStyles();

	const handleTagSelect = (tag) => {
		setSelectedTag(tag);
	};
	
	return (
		<Box mt={2}>
			<ButtonGroup variant="outlined" color="myviolet" className={classes.buttonGroup}>
				<Button
					onClick={() => handleTagSelect("all")}
					variant={selectedTag === "all" ? "contained" : "outlined"}
					className={classes.button}
				>
					All
				</Button>
				<Button
					onClick={() => handleTagSelect("web")}
					variant={selectedTag === "web" ? "contained" : "outlined"}
					className={classes.button}
				>
					Web
				</Button>
				<Button
					onClick={() => handleTagSelect("42")}
					variant={selectedTag === "42" ? "contained" : "outlined"}
					className={classes.button}
				>
					42
				</Button>
			</ButtonGroup>
		</Box>
	)
}

export default TagSelector