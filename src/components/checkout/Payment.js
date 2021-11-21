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
      <Box>
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
      </Box>
    </Container>
  );
}
