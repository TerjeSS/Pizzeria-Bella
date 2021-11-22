import { Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Quantity = ({ quantity, setQuantity }) => {
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
				<AddIcon onClick={() => setQuantity(quantity + 1)} />
			</IconButton>
			<Typography variant="h5" style={{}}>
				{quantity}
			</Typography>
			<IconButton style={{ paddingLeft: '0' }} edge="end" size="large">
				<RemoveIcon
					onClick={() => {
						if (quantity > 0) {
							setQuantity(quantity - 1);
						}
					}}
				/>
			</IconButton>
		</Grid>
	);
};

export default Quantity;
