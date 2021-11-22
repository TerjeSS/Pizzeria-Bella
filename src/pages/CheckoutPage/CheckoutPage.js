import React, { useState } from "react";
import useStyles from "../../materialStyles";
import SelectedCard from "../../components/checkout/SelectedCard";
import Delivery from "../../components/checkout/Delivery";
import { Container } from "@mui/material";
import SelectedProducts from "../../SelectedProducts";
import Payment from "../../components/checkout/Payment";

const CheckoutPage = ({ shoppingCart, setShoppingCart }) => {
  const styles = useStyles();
  return (
    <Container
      className={styles.global}
      style={{
        backgroundColor: "#f4f4f4",
        margin: "30px auto",
        padding: "15px 0",
      }}
    >
      <h1>Selected Items</h1>
      <SelectedCard
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
      <Delivery shoppingCart={shoppingCart} />
      <Payment />
    </Container>
  );
};

export default CheckoutPage;
