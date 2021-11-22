import { Container, Grid, Link, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import FoodItem from '../../components/FoodMenu/FoodItem';
import Products from '../../Products';
const MenuPage = (props) => {
	const products = Products;
	const { shoppingCart, setShoppingCart, addToCart, quantity, setQuantity } = props;

	return (
		<Container>
			<Box component="form">
				<TextField fullWidth margin="normal" id="search" label="Søk etter rett" variant="outlined" />
			</Box>
			<Box component="h5" style={{ display: 'flex', alignContent: 'space-between' }}>
				<Link href="#">Pizza</Link>
				<Link href="#">Pizzaaa</Link>
				<Link href="#">Tilbehør</Link>
				<Link href="#">Drikke</Link>
				<Link href="#">Dessert</Link>
			</Box>
			<Grid container spacing="3">
				{Products.map((object) => {
					return (
						<FoodItem
							{...object}
							shoppingCart={shoppingCart}
							setShoppingCart={setShoppingCart}
							addToCart={addToCart}
							quantity={quantity}
							setQuantity={setQuantity}
						/>
					);
				})}
			</Grid>
		</Container>
	);
};

export default MenuPage;
