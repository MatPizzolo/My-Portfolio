import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/material/styles";
import MKTypography from "components/MKTypography";
import { Grid, Box } from "@mui/material";
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
}) => {
	let cardStyles = {
		height: "auto",
		display: "flex",
		flexDirection: "column",
		backgroundColor: darkMode ? "#1c1c22" : "white",
		borderRadius: "2rem",
		marginBottom: "5rem",
	};

	const theme = useTheme();
	const isLG = useMediaQuery(theme.breakpoints.up("lg"));
	const isNotMD = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Grid item xs={12} sm={6} xl={4}>
			<Card sx={cardStyles}>
				<MKBox
					component="img"
					src={imageSrc}
					sx={{
						flex: "60%",
						width: "100%",
						backgroundSize: "cover",
						objectFit: "cover",
						borderRadius: "2rem 2rem 0 0",
						backgroundColor: "grey",
						height: { xs: "200px", md: "300px" },
						minHeight: { xs: "200px", md: "300px" },
						maxHeight: { xs: "200px", md: "300px" },
					}}
				/>
				<CardContent
					style={{
						backgroundColor: darkMode ? "#1c1c22" : "white",
						borderRadius: "2rem",
					}}
				>
					<Grid
						container
						sx={{
							height: { xs: "150px", md: "200px" },
							minHeight: { xs: "150px", md: "200px" },
							maxHeight: { xs: "150px", md: "200px" },
						}}
					>
						<Grid
							item
							xs={12}
							md={6}
							display="flex"
							flexDirection="column"
							justifyContent="space-between"
						>
							<MKBox
								sx={{
									color: darkMode && "white !important",
								}}
							>
								<MKTypography variant={isLG ? "h3" : "h4"} color="white !important">
									{title}
								</MKTypography>
								<MKTypography variant="h6" color="white !important">
									{description}
								</MKTypography>
							</MKBox>
							<MKBox>
								<MKBox
									display="flex"
									sx={{ justifyContent: { xs: "center", md: "left" } }}
								>
									<MKTypography
										variant="h5"
										sx={{
											marginRight: "1rem",
											fontWeight: "500",
											background:
												" linear-gradient(0, #A8B4FF 50%, transparent 50%)",
											cursor: "pointer",
											color: darkMode ? "white !important" : "black",
											whiteSpace: "nowrap",
										}}
										onClick={() => {
											window.open(repoLink, "_blank");
										}}
									>
										Visit repository
									</MKTypography>
									<ArrowRightAltIcon
										alignItem="center"
										sx={{ marginTop: "auto" }}
										fontSize="medium"
									/>
								</MKBox>
								{pageLink && (
									<MKBox
										display="flex"
										mt={2}
										sx={{ justifyContent: { xs: "center", md: "left" } }}
									>
										<MKTypography
											variant="h5"
											sx={{
												marginRight: "1rem",
												fontWeight: "500",
												background:
													" linear-gradient(0, #A8B4FF 50%, transparent 50%)",
												cursor: "pointer",
											}}
										>
											<a
												target="_blank"
												href={pageLink}
												style={{ color: "black", textDecoration: "none" }}
											>
												Visit live site
											</a>
										</MKTypography>
										<ArrowRightAltIcon
											alignItem="center"
											sx={{ marginTop: "auto" }}
											fontSize="medium"
										/>
									</MKBox>
								)}
							</MKBox>
							{isNotMD && <Box pt={4} />}
						</Grid>
						<Grid item xs={12} md={6}>
							<MKBox
								display="flex"
								flexDirection={isNotMD ? "row" : "column"}
								alignItems={isNotMD ? "center" : "flex-end"}
								gap={isNotMD ? "1rem" : "0.5rem 0"}
								flexWrap="wrap"
							>
								{tags.map((tag) => {
									return (
										<MKBox
											component="img"
											src={tag}
											sx={{
												objectFit: "contain",
												height: { xs: "25px", sm: "20px", lg: "25px" },
											}}
										/>
									);
								})}
							</MKBox>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default ProjectCard;