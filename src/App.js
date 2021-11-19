import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import MenuPage from './pages/MenuPage/MenuPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Container, Grid, Link, TextField } from '@material-ui/core';

function App() {
	return (
		<div>
			<Navbar />
			<Breadcrumbs aria-label="breadcrumb">
				<Link href="/landingpage">Home</Link>
				<Link href="/">Menu</Link>
			</Breadcrumbs>
			<Routes>
				<Route path="/landingPage" element={<LandingPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route path="/" element={<MenuPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
