import React from "react";
import PaymentStyle from "./PaymentStyle";
import { Container, Box, TextField, Button } from "@mui/material";
import visaImg from "./img/visa.png";
import vippsImg from "./img/vipps_logo_rgb.png";
import paypalImg from "./img/paypal.png";

export default function Payment() {
  const style = PaymentStyle();
  return (
    <Container className={style.container}>
      <Box className={style.rowBox}>
        <img className={style.pngIcon} src={visaImg} alt="" />
        <img className={style.pngIcon} src={vippsImg} alt="" />
        <img className={style.pngIcon} src={paypalImg} alt="" />
      </Box>
      <Box className={style.textFieldBox}>
        <Box component="form">
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
          />
          <TextField
            style={{
              margin: "5px 0",
              width: "20%",
              backgroundColor: "#f4f4f4",
            }}
            required
            id="outlined-basic"
            label="CVC"
            variant="outlined"
          />
          <TextField
            style={{
              margin: "5px 0",
              width: "80%",
              backgroundColor: "#f4f4f4",
            }}
            required
            id="outlined-basic"
            label="Utløpsdato"
            variant="outlined"
          />
          <Button
            variant="contained"
            style={{
              margin: "30px 0",
              backgroundColor: "#0F2841",
              padding: "10px 30px",
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
