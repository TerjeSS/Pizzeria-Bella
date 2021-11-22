import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GlobalStyles from "./GlobalStyles";
import Login from "./pages/Login/Login";
function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
