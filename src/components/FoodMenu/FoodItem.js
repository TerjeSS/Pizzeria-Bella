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

const FoodItem = (props) => {
	const { name, priceSmall, priceLarge, ingredients, allergens, image, description, category } = props;
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
				onClick={dotsClicked}
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
					<Grid item xs={2} md={2} style={{ height: '100%' }}>
						<img
							src={image}
							alt={name}
							width="100%"
							height="100%"
							style={{ marginRight: '5px', objectFit: 'cover' }}
						/>
					</Grid>
					<Grid item xs={9} md={9} sx={{ border: '1px solid green' }}>
						<Typography component="h5" variant="h5" style={{}}>
							{name}
						</Typography>
						<Typography>{expanded ? ingredients : `${ingredients.substring(0, 23)}...`}</Typography>
						<Grid item style={{}}>
							<FormControl>
								<RadioGroup row defaultValue="Liten" name="størrelse">
									<FormControlLabel
										value="Liten"
										label={`Liten: ${priceSmall},-`}
										control={<Radio />}
									/>
									<FormControlLabel
										value="Stor"
										control={<Radio />}
										label={`Stor: ${priceLarge},-`}
									/>
								</RadioGroup>
							</FormControl>
						</Grid>
					</Grid>
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
							<AddShoppingCartIcon />
						</IconButton>
						<IconButton style={{ paddingLeft: '0' }} edge="end" size="large" onClick={dotsClicked}>
							{expanded ? (
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
										<AddShoppingCartIcon />
									</IconButton>
									<Typography variant="h5">5</Typography>
									<IconButton style={{ paddingLeft: '0' }} edge="end" size="large">
										<AddShoppingCartIcon />
									</IconButton>
								</Grid>
							) : (
								<MoreHorizIcon />
							)}
						</IconButton>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

export default FoodItem;
