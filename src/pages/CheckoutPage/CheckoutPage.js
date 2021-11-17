import { style } from "@mui/system";
import React from "react";
import useStyles from "../../materialStyles";
import CheckoutCard from "../../components/checkoutCard/CheckoutCard";
import { Container, Grid } from "@mui/material";
const CheckoutPage = () => {
  const styles = useStyles();
  return (
    <div className={styles.global}>
      <h1>Selected Items</h1>
      <div>
        <CheckoutCard />
      </div>
    </div>
  );
};

export default CheckoutPage;
