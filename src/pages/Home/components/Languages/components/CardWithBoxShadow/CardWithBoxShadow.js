import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import MKBox from "components/MKBox";

const CardWithBoxShadow = ({ title, imageUrl, darkMode }) => {
	const cardStyles = {
	  margin: "auto",
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center", // Center horizontally
	  justifyContent: "center", // Center vertically
	  width: "auto",
	  maxWidth: "210px",
	  minWidth: "180px",
	  height: "100%",
	  backgroundColor: darkMode ? "#1c1c22" : "#FFFF",
	  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // Add your desired box shadow here
	  borderRadius: "8px",
	  transition: "transform 0.2s",
	  "&:hover": {
		transform: "scale(1.05)",
	  },
	  textAlign: "center",
	};
  
	return (
	  <Card sx={cardStyles}>
		<CardContent textAlign="center">
		  <MKBox
			component="img"
			src={imageUrl}
			width="150px"
			height="150px"
			sx={{ objectFit: "contain" }}
		  />
		  {/* <Typography variant="h3" sx={{color: darkMode && "white !important"}}>
			{title}
		  </Typography> */}
		</CardContent>
	  </Card>
	);
  };

export default CardWithBoxShadow;