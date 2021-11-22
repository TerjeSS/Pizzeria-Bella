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
import Products from '../../Products';

const FoodItem = (props) => {
	const { name, priceSmall, priceLarge, ingredients, allergens, image, description, category, id } = props;

	//State for antall å adde
	const [
		quantity,
		setQuantity
	] = useState(0);

	//funksjon for å utvide kortet med riktig state.
	const dotsClicked = () => {
		setExpanded(!expanded);
	};
	const [
		expanded,
		setExpanded
	] = useState(false);

	//Funksjoner og state for shoppingCart. Dette må kanskje flyttes enda et hakk opp for å fungere i
	//shopping-carten på alle sidene?

	const [
		shoppingCart,
		setShoppingCart
	] = useState([]);
	const addToCart = (e) => {
		const id = e.currentTarget.getAttribute('value');
		console.log('id' + id);
		let tempArray = Products.filter((product) => product.id == id);
		console.log('temp' + tempArray);
		setShoppingCart([
			...shoppingCart,
			tempArray[0]
		]);
		console.log(shoppingCart);
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
					backgroundColor : '#E9EDF0',
					maxHeight       : '250px'
				}}
			>
				<Grid container direction="row" style={{}} alignItems="center">
					<Grid item xs={3} md={3} style={{ height: '100%', marginRight: '11px' }} onClick={dotsClicked}>
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
							{expanded ? ingredients : `${ingredients.substring(0, 25)}...`}
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
						xs={1}
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
							value={id}
							onClick={(e) => addToCart(e)}
						>
							<AddShoppingCartIcon />
						</IconButton>
						<IconButton style={{ padding: '0', marginRight: '1px' }} edge="end" size="large">
							{expanded ? (
								<Quantity quantity={quantity} setQuantity={setQuantity} />
							) : (
								<MoreHorizIcon onClick={dotsClicked} style={{ marginTop: '34px' }} />
							)}
						</IconButton>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

export default FoodItem;
