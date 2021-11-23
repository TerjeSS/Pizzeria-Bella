import React from "react";
import PaymentStyle from "./PaymentStyle";
import { Box, TextField, Button } from "@mui/material";

export default function PayPayPal({ handleCheckoutMessage }) {
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
        label="epost:"
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
        label="passord:"
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
        Logg inn
      </Button>
    </Box>
  );
}
