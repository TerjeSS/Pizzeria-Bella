import {
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import HomeDelivery from "./HomeDelivery";
import PickUp from "./PickUp";

export default function Total({ shoppingCart }) {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const handleDeliveryMethod = (event) => {
    setDeliveryMethod(event.target.value);
  };

  return (
    <Container>
      <FormControl component="fieldset">
        <RadioGroup
          style={{ display: "flex", flexDirection: "row", margin: "20px 0" }}
          onClick={handleDeliveryMethod}
        >
          <FormControlLabel
            value="hente"
            control={<Radio />}
            label="Hente Selv"
          />
          <FormControlLabel
            value="levert"
            control={<Radio />}
            label="Få levert"
          />
        </RadioGroup>
      </FormControl>
      {deliveryMethod == "levert" && (
        <HomeDelivery shoppingCart={shoppingCart} />
      )}
      {deliveryMethod == "hente" && <PickUp shoppingCart={shoppingCart} />}
    </Container>
  );
}
