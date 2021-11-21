import React, { useState } from "react";
import useStyles from "../../materialStyles";
import SelectedCard from "../../components/checkout/SelectedCard";
import Delivery from "../../components/checkout/Delivery";
import { Container } from "@mui/material";
import SelectedProducts from "../../SelectedProducts";
import Payment from "../../components/checkout/Payment";

const CheckoutPage = () => {
  const styles = useStyles();
  const { products } = SelectedProducts; // dummy values
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
      <SelectedCard products={products} />
      <Delivery products={products}></Delivery>
      <Payment />
    </Container>
  );
};

export default CheckoutPage;
