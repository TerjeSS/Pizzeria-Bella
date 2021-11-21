import { Typography, Box, TextField } from "@mui/material";
import React from "react";

export default function HomeDelivery(props) {
  const prices = props.products.map((product) => {
    return product.price;
  });
  const reducer = (accumulator, curr) => accumulator + curr;
  const deliveryPrice = 50;
  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Typography variant="h6">Leveringstid: </Typography>
        <Typography variant="h6">Ca 45 min </Typography>
      </Box>

      <Box>
        <TextField
          style={{ width: "100%", margin: "5px 0" }}
          id="outlined-basic"
          label="Navn"
          variant="outlined"
          size="small"
        />
        <TextField
          style={{ width: "100%", margin: "5px 0" }}
          id="outlined-basic"
          label="Adresse"
          variant="outlined"
          size="small"
          required
        />
        <TextField
          style={{ width: "100%", margin: "5px 0" }}
          id="outlined-basic"
          label="Telefon"
          variant="outlined"
          size="small"
          required
        />
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Typography variant="subtitle1">Varer: </Typography>
        <Typography variant="subtitle1">
          {prices.reduce(reducer)} kr{" "}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Typography variant="subtitle1">Levering: </Typography>
        <Typography variant="subtitle1">{deliveryPrice} kr </Typography>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Typography variant="h4">Total: </Typography>
        <Typography variant="h4">
          {prices.reduce(reducer) + deliveryPrice} kr
        </Typography>
      </Box>
    </div>
  );
}
