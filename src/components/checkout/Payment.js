import React, { useState } from "react";

import PaymentStyle from "./PaymentStyle";
import PayVisa from "./PayVisa";
import PayVipps from "./PayVipps";
import PayPayPal from "./PayPayPal";
import { Container, Box, IconButton, Typography } from "@mui/material";
import visaImg from "./img/visa.png";
import vippsImg from "./img/vipps_logo_rgb.png";
import paypalImg from "./img/paypal.png";

export default function Payment() {
  const style = PaymentStyle();

  const [payMethod, setPayMethod] = useState("");
  const handlePayMethod = (event) => {
    setPayMethod(event.currentTarget.value);
  };

  return (
    <Container className={style.container}>
      <Typography variant="h5">Velg Betaling</Typography>
      <Box className={style.rowBox}>
        <IconButton value="visa" onClick={handlePayMethod}>
          <img className={style.pngIcon} src={visaImg} alt="" />
        </IconButton>
        <IconButton value="vipps" onClick={handlePayMethod}>
          <img className={style.pngIcon} src={vippsImg} alt="" />
        </IconButton>
        <IconButton value="paypal" onClick={handlePayMethod}>
          <img className={style.pngIcon} src={paypalImg} alt="" />
        </IconButton>
      </Box>
      <Box>{payMethod == "visa" && <PayVisa />}</Box>
      <Box>{payMethod == "vipps" && <PayVipps />}</Box>
      <Box>{payMethod == "paypal" && <PayPayPal />}</Box>
    </Container>
  );
}
