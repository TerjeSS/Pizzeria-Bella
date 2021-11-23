import { Typography, Box, TextField } from "@mui/material";
import React from "react";

export default function HomeDelivery({ shoppingCart }) {
  const prices = shoppingCart.map((p) => {
    return p.realPrice * p.selectedQuantity;
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
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="h6"
        >
          Leveringstid:{" "}
        </Typography>
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="h6"
        >
          Ca 45 min{" "}
        </Typography>
      </Box>

      <Box>
        <TextField
          style={{ width: "100%", margin: "5px 0", fontFamily: "poppins" }}
          id="outlined-basic"
          label="Navn"
          variant="outlined"
          size="small"
        />
        <TextField
          style={{ width: "100%", margin: "5px 0", fontFamily: "poppins" }}
          id="outlined-basic"
          label="Adresse"
          variant="outlined"
          size="small"
          required
        />
        <TextField
          style={{ width: "100%", margin: "5px 0", fontFamily: "poppins" }}
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
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="subtitle1"
        >
          Varer:{" "}
        </Typography>
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="subtitle1"
        >
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
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="subtitle1"
        >
          Levering:{" "}
        </Typography>
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="subtitle1"
        >
          {deliveryPrice} kr{" "}
        </Typography>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="h4"
        >
          Total:{" "}
        </Typography>
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="h4"
        >
          {prices.reduce(reducer) + deliveryPrice} kr
        </Typography>
      </Box>
    </div>
  );
}
