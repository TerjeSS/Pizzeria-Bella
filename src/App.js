import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GlobalStyles from "./GlobalStyles";
import Login from "./pages/Login/Login";
import Products from "./Products";
import { useState } from "react";

function App() {
  //Attempt nr1 for AddToCart
  const [shoppingCart, setShoppingCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (e, quant, storrelse) => {
    setCount((prev) => {
      return prev + 1;
    });
    console.log("quant=" + quant);
    const id = e.currentTarget.getAttribute("value");
    let tempArray = Products.filter((product) => product.id == id);

    //for å legge inn riktig pris
    tempArray[0].selectedSize = storrelse;
    tempArray[0].selectedQuantity = quant;
    if (tempArray[0].selectedSize === "liten") {
      tempArray[0].realPrice = tempArray[0].priceSmall;
    } else if (tempArray[0].selectedSize === "stor") {
      tempArray[0].realPrice = tempArray[0].priceLarge;
    }
    const newItem = { ...tempArray[0] };
    newItem.uniqe = count;

    const exists = shoppingCart.find((item) => item.id === tempArray[0].id);

    const equalSize = shoppingCart.find(
      (item) => item.selectedSize === tempArray[0].selectedSize
    );
    if (exists && equalSize) {
      shoppingCart.map((item) =>
        item.id === tempArray[0].id &&
        item.selectedSize === tempArray[0].selectedSize
          ? (item.selectedQuantity += tempArray[0].selectedQuantity)
          : null
      );
    } else {
      setShoppingCart((prevState) => {
        return [...prevState, newItem];
      });
    }

    console.log(shoppingCart);
  };

  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <GlobalStyles />
      <Navbar shoppingCart={shoppingCart} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <MenuPage
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
