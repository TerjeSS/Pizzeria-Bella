import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import MenuPage from './pages/MenuPage/MenuPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GlobalStyles from './GlobalStyles';
import Login from './pages/Login/Login';
import Products from './Products';
import { useState } from 'react';

function App() {
	//Attempt nr1 for AddToCart
	const [
		shoppingCart,
		setShoppingCart
	] = useState([]);

	const addToCart = (e, quant, size) => {
		console.log('quant=' + quant);
		const id = e.currentTarget.getAttribute('value');
		let tempArray = Products.filter((product) => product.id == id);

		//for å legge inn riktig pris
		tempArray[0].selectedSize = size;
		if (tempArray[0].selectedSize === 'liten') {
			tempArray[0].realPrice = tempArray[0].priceSmall;
		}
		else if (tempArray[0].selectedSize === 'stor') {
			tempArray[0].realPrice = tempArray[0].priceLarge;
		}

		setShoppingCart((prevState) => {
			return [
				...prevState,
				tempArray[0]
			];
		});

		console.log(shoppingCart);
		console.log(shoppingCart[0] === shoppingCart[1]);
	};

	const [
		quantity,
		setQuantity
	] = useState(0);

	return (
		<div>
			<GlobalStyles />
			<Navbar shoppingCart={shoppingCart} />

			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/checkout" element={<CheckoutPage shoppingCart={shoppingCart} />} />
				<Route
					path="/menu"
					element={
						<MenuPage shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} addToCart={addToCart} />
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
