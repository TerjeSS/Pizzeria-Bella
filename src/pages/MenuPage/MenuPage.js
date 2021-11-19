import { Container, Grid, Link, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import FoodItem from '../../components/FoodMenu/FoodItem';
import Products from '../../Products';
const MenuPage = () => {
	const products = Products;

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
				<FoodItem />

				<FoodItem />
			</Grid>
		</Container>
	);
};

export default MenuPage;
