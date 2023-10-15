import React from 'react'
import { Box } from '@mui/material'

const ImgInBox = ({ data }) => {
	return (
		<Box
			display="flex"
			justifyContent="space-around"
			gap={4} // Updated 'spaceBetween' to 'gap' for better responsiveness
			m="auto"
			flexWrap="wrap"
			maxWidth="1000px"
		>
			{data.map((comp, index) => (
				(comp.imageUrl &&
					<Box
						key={index}
					>
						<Box
							component="img"
							sx={{
								width: '100%',
								marginBottom: '2rem', // Add some vertical spacing
								maxHeight: {
									xs: '35px',
									sm: '55px',
									md: '55px',
									lg: '75px',
								}
							}}
							src={comp.imageUrl}
							alt={`Language ${index + 1}`}
						/>
					</Box>
				)
			))}
		</Box>
	)
}

export default ImgInBox