import React from "react";
import PaymentStyle from "./PaymentStyle";
import { Box, TextField, Button } from "@mui/material";

export default function PayVisa({ handleCheckoutMessage }) {
  const style = PaymentStyle();

  return (
    <Box component="form" className={style.textFieldBox}>
      <TextField
        style={{
          margin: "5px 0",
          width: "100%",
          backgroundColor: "#f4f4f4",
        }}
        required
        id="outlined-basic"
        label="Kortholders navn"
        variant="outlined"
        size="small"
      />
      <TextField
        style={{
          margin: "5px 0",
          width: "100%",
          backgroundColor: "#f4f4f4",
        }}
        required
        id="outlined-basic"
        label="Kortnummer"
        variant="outlined"
        size="small"
      />
      <TextField
        style={{
          margin: "5px 0",
          width: "30%",
          backgroundColor: "#f4f4f4",
        }}
        required
        id="outlined-basic"
        label="CVC"
        variant="outlined"
        size="small"
      />
      <TextField
        style={{
          margin: "5px 0",
          width: "70%",
          backgroundColor: "#f4f4f4",
        }}
        required
        id="outlined-basic"
        label="Utløpsdato"
        variant="outlined"
        size="small"
      />
      <Button
        onClick={handleCheckoutMessage}
        variant="contained"
        style={{
          margin: "20px 0 10px 0",
          backgroundColor: "#0F2841",
          padding: "10px 30px",
        }}
      >
        Checkout
      </Button>
    </Box>
  );
}
