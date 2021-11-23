import React, { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import PaymentStyle from "./PaymentStyle";
import PayVisa from "./PayVisa";
import PayVipps from "./PayVipps";
import PayPayPal from "./PayPayPal";
import { Container, Box, IconButton, Typography } from "@mui/material";
import visaImg from "./img/visa.png";
import vippsImg from "./img/vipps_logo_rgb.png";
import paypalImg from "./img/paypal.png";
import Modal from "@mui/material/Modal";

export default function Payment() {
  const navigate = useNavigate();
  const style = PaymentStyle();
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  const [payMethod, setPayMethod] = useState("");
  const handlePayMethod = (event) => {
    setPayMethod(event.currentTarget.value);
  };

  const handleCheckoutMessage = () => {
    setCheckoutMessage(true);
    const timer = setTimeout(() => {
      window.location.reload(navigate("/"));
    }, 4000);

    return () => clearTimeout(timer);
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
      <Box>
        {payMethod == "visa" && (
          <PayVisa handleCheckoutMessage={handleCheckoutMessage} />
        )}
      </Box>
      <Box>
        {payMethod == "vipps" && (
          <PayVipps handleCheckoutMessage={handleCheckoutMessage} />
        )}
      </Box>
      <Box>
        {payMethod == "paypal" && (
          <PayPayPal handleCheckoutMessage={handleCheckoutMessage} />
        )}
      </Box>
      <div>
        <Modal
          open={checkoutMessage}
          onClose={() => setCheckoutMessage(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Takk for handelen
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Maten vil være klar så fort som mulig. <br />
              <DeliveryDiningIcon />
              <br />
              Du vil bli sendt til forsiden.
            </Typography>
          </Box>
        </Modal>
      </div>
    </Container>
  );
}
