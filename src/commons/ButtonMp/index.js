import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MKButton from "components/MKButton";
import { Box } from "@mui/material";

function ButtonMp({ linkRef, title, darkMode }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const buttonStyle = {
    width: "200px",
    height: "60px",
    border: "2px solid black",
    position: "absolute",
    top: isSmallScreen ? 10 : 5,
    left: isSmallScreen ? 15 : 25,
    background: darkMode ? "#090e15" : "#e2e3ee",
    borderColor: darkMode ? "white !important" : "#1e293b", 
    '&:hover': {
      background: 'inherit',
      color: 'inherit',
    },
  };

  const buttonStyle2 = {
    background: 'linear-gradient(to right, purple, orange)',
    width: "200px",
    height: "60px",
    border: "2px solid black",
    position: "absolute",
    top: isSmallScreen ? 10 : 5,
    left: isSmallScreen ? 15 : 25,
    color: "white !important"
  };

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: { xs: "272px", ms: "100%" },
        margin: { xs: "auto", md: "0" },
      }}
    >
      <MKButton
        sx={{ ...buttonStyle2,
          '&:hover': {
            background: 'linear-gradient(to right, orange, purple)', // Adjust hover gradient
          },
          borderColor: darkMode ? "white !important" : "#1e293b",
        }}
        href={linkRef}
        target="_blank"
      >
        {title}
      </MKButton>
      <MKButton
        sx={{
          ...buttonStyle,
          position: "static",
          marginTop: "20px",
          "&:hover": {
            cursor: "default",
            backgroundColor: darkMode ? "#090e15" : "#e2e3ee",
          },
        }}
      />
    </Box>
  );
}

export default ButtonMp;
