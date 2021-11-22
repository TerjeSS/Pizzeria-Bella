import { Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Quantity = () => {
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
				<AddIcon />
			</IconButton>
			<Typography variant="h5" style={{}}>
				5
			</Typography>
			<IconButton style={{ paddingLeft: '0' }} edge="end" size="large">
				<RemoveIcon />
			</IconButton>
		</Grid>
	);
};

export default Quantity;
