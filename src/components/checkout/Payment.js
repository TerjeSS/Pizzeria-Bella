import React from "react";
import PaymentStyle from "./PaymentStyle";
import {
  Typography,
  Container,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  TextField,
} from "@mui/material";
import visaImg from "./img/visa.png";
import vippsImg from "./img/vipps_logo_rgb.png";
import paypalImg from "./img/paypal.png";

export default function Payment() {
  const style = PaymentStyle();
  return (
    <Box className={style.rowBox}>
      <img className={style.pngIcon} src={visaImg} alt="" />
      <img className={style.pngIcon} src={vippsImg} alt="" />
      <img className={style.pngIcon} src={paypalImg} alt="" />
    </Box>
  );
}
