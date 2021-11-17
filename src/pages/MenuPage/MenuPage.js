import { Container, Grid, Link, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import FoodItem from '../../components/FoodMenu/FoodItem';

const MenuPage = () => {
	let products = require('../../products.JSON');

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
				<Grid item xs={12} sm={12} lg={6}>
					<FoodItem />
				</Grid>
				<Grid item xs={12} sm={12} lg={6}>
					<FoodItem />
				</Grid>
			</Grid>
		</Container>
	);
};

export default MenuPage;
