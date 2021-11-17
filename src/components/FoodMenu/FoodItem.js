import {
	Grid,
	Card,
	IconButton,
	Typography,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@material-ui/core';
import React from 'react';
import useStyles from '../../materialStyles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import bolognese from '../../img/bolognese.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const FoodItem = () => {
	const styles = useStyles();
	return (
		<Card
			style={{
				display         : 'flex',
				flexDirection   : 'row',
				justifyContent  : 'space-between',
				borderRadius    : '20px',
				border          : '1px solid black',
				backgroundColor : '#E9EDF0'
			}}
		>
			<Grid container direction="row" style={{ width: '100%' }} alignItems="center">
				<Grid item xs={2} md={2}>
					<img src={bolognese} alt="bolognese" width="45" style={{ marginRight: '5px' }} />
				</Grid>
				<Grid item xs={8.5} md={8.5} sx={{ border: '1px solid green' }}>
					<Typography component="h5" variant="h5" style={{}}>
						Bolognese
					</Typography>
					<Typography>Tomat, kjøtt, penne</Typography>
					<Grid item style={{}}>
						<FormControl>
							<RadioGroup row defaultValue="Liten" name="størrelse">
								<FormControlLabel value="Liten" label="Liten: 99,-" control={<Radio />} />
								<FormControlLabel value="Stor" control={<Radio />} label="Stor: 129,-" />
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item xs={1.5} md={1.5} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
					<IconButton edge="end" size="large">
						<AddShoppingCartIcon />
					</IconButton>
					<IconButton edge="end" size="large">
						<MoreHorizIcon />
					</IconButton>
				</Grid>
			</Grid>
		</Card>
	);
};

export default FoodItem;
