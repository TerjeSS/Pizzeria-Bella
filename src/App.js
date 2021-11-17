import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import MenuPage from './pages/MenuPage/MenuPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Navbar />
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
