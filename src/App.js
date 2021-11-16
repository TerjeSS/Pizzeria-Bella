import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <Container maxWidth="lg">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>

      <Footer />
    </Container>
  );
}

export default App;
