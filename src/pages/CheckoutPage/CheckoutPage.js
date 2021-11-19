import { style } from "@mui/system";
import React from "react";
import useStyles from "../../materialStyles";
import CheckoutCard from "../../components/checkoutCard/CheckoutCard";
import { Container } from "@mui/material";
const CheckoutPage = () => {
  const styles = useStyles();
  return (
    <Container
      className={styles.global}
      style={{ backgroundColor: "#f4f4f4", margin: "auto", padding: "15px 0" }}
    >
      <h1>Selected Items</h1>
      <CheckoutCard />
    </Container>
  );
};

export default CheckoutPage;
