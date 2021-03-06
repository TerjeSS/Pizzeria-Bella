import React from "react";
import PaymentStyle from "./PaymentStyle";
import { Box, TextField, Button } from "@mui/material";

export default function PayVipps({ handleCheckoutMessage }) {
  const style = PaymentStyle();

  return (
    <Box component="form" className={style.textFieldBox}>
      <TextField
        style={{
          margin: "5px 0",
          width: "100%",
          backgroundColor: "#f4f4f4",
          fontFamily: "poppins",
        }}
        required
        id="outlined-basic"
        label="Telefonnummer:"
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
          fontFamily: "poppins",
        }}
      >
        Send Vipps-krav
      </Button>
    </Box>
  );
}
