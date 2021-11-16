import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <Link to="/checkout">Checkout</Link>
      </ul>
      <ul>
        <Link to="/menu">Menu</Link>
      </ul>
    </div>
  );
};

export default Navbar;
