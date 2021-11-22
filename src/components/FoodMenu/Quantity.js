import { Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
const Quantity = ({ quant, setQuant }) => {
	return (
		<Grid
			item
			xs={1}
			md={1}
			style={{
				display       : 'flex',
				flexDirection : 'column',
				position      : 'relative'
			}}
		>
			<IconButton style={{ paddingLeft: '0' }} edge="end" size="large">
				<AddIcon onClick={() => setQuant(quant + 1)} />
			</IconButton>
			<Typography variant="h5" style={{}}>
				{quant}
			</Typography>
			<IconButton style={{ paddingLeft: '0' }} edge="end" size="large">
				<RemoveIcon
					onClick={() => {
						if (quant > 0) {
							setQuant(quant - 1);
						}
					}}
				/>
			</IconButton>
		</Grid>
	);
};

export default Quantity;
