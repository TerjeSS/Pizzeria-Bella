import React from "react";
import useStyles from "../../materialStyles";
import CheckoutCard from "../../components/checkoutCard/CheckoutCard";
import Total from "../../components/checkoutCard/Total";
import { Container } from "@mui/material";
import CheckoutProducts from "../../CheckoutProducts";

const CheckoutPage = () => {
  const styles = useStyles();
  const { products } = CheckoutProducts;

  return (
    <Container
      className={styles.global}
      style={{ backgroundColor: "#f4f4f4", margin: "auto", padding: "15px 0" }}
    >
      <h1>Selected Items</h1>
      <CheckoutCard products={products} />
      <Total></Total>
    </Container>
  );
};

export default CheckoutPage;
