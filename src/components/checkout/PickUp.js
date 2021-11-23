import { Typography, Box, TextField } from "@mui/material";
import React from "react";

export default function PickUp({ shoppingCart }) {
  const prices = shoppingCart.map((p) => {
    return p.realPrice * p.selectedQuantity;
  });
  const reducer = (accumulator, curr) => accumulator + curr;
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
          Tilberedningstid:{" "}
        </Typography>
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="h6"
        >
          Ca 25 min{" "}
        </Typography>
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
          variant="h4"
        >
          Total:{" "}
        </Typography>
        <Typography
          style={{ fontFamily: "poppins", color: "#515151" }}
          variant="h4"
        >
          {prices.reduce(reducer)} kr
        </Typography>
      </Box>
    </div>
  );
}
