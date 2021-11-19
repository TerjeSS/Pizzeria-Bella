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
import { useState } from 'react';
import useStyles from '../../materialStyles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import bolognese from '../../img/bolognese.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Quantity from './Quantity';
import { Box, height } from '@mui/system';

const FoodItem = (props) => {
	const { name, priceSmall, priceLarge, ingredients, allergens, image, description, category, id } = props;
	const styles = useStyles();
	const [
		expanded,
		setExpanded
	] = useState(false);
	const dotsClicked = () => {
		setExpanded(!expanded);
	};

	return (
		<Grid item xs={12} sm={12} lg={6}>
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
				<Grid container direction="row" style={{}} alignItems="center">
					<Grid item xs={3} md={2} style={{ height: '100%', marginRight: '11px' }} onClick={dotsClicked}>
						<img src={image} alt={name} width="100%" height="100%" style={{ objectFit: 'cover' }} />
					</Grid>
					<Grid
						item
						xs={7}
						md={8}
						style={{
							display        : 'flex',
							flexDirection  : 'column',
							justifyContent : 'space-between',
							height         : '100%'
						}}
					>
						<Typography component="h5" variant="h5" style={{}} onClick={dotsClicked}>
							{name}
						</Typography>
						<Typography style={{ fontSize: '13px' }} onClick={dotsClicked}>
							{expanded ? ingredients : `${ingredients.substring(0, 33)}...`}
						</Typography>
						<Grid item style={{ position: 'relative' }}>
							<Box display={{ fontSize: '12px' }}>
								<RadioGroup row defaultValue="Liten" name="størrelse">
									<FormControlLabel
										value="Liten"
										size="small"
										label={`Liten: ${priceSmall},-`}
										control={<Radio />}
									/>
									<FormControlLabel
										style={{ fontSize: '10px' }}
										value="Stor"
										size="small"
										control={<Radio />}
										label={`Stor: ${priceLarge},-`}
									/>
								</RadioGroup>
							</Box>
						</Grid>
					</Grid>
					<Grid
						item
						xs
						style={{
							display        : 'flex',
							flexDirection  : 'column',
							justifyContent : 'space-between',
							marginRight    : '7px',
							height         : '100%'
						}}
					>
						<IconButton
							style={{ padding: '0', marginRight: '1px', marginTop: '30px' }}
							edge="end"
							size="medium"
						>
							<AddShoppingCartIcon />
						</IconButton>
						<IconButton
							style={{ padding: '0', marginRight: '1px' }}
							edge="end"
							size="large"
							onClick={dotsClicked}
						>
							{expanded ? <Quantity /> : <MoreHorizIcon style={{ marginTop: '34px' }} />}
						</IconButton>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

export default FoodItem;
