import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MKButton from "components/MKButton";
import { Box } from "@mui/material";

function ButtonMp({ linkRef, title }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const buttonStyle = {
    width: "200px",
    height: "60px",
    border: "2px solid black",
    position: "absolute",
    top: isSmallScreen ? 10 : 5,
    left: isSmallScreen ? 15 : 25,
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
        sx={{ ...buttonStyle }}
        color="black"
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
          backgroundColor: "#EAECF9",
          "&:hover": {
            backgroundColor: "#EAECF9",
            cursor: "auto"
          },
        }}
      />
    </Box>
  );
}

export default ButtonMp;
