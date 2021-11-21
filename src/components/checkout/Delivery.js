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
import React, { useState } from "react";
import HomeDelivery from "./HomeDelivery";
import PickUp from "./PickUp";
import SelectedProducts from "../../SelectedProducts";

export default function Total() {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const handleDeliveryMethod = (event) => {
    setDeliveryMethod(event.target.value);
  };

  const { products } = SelectedProducts; //
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
      {deliveryMethod == "levert" && <HomeDelivery products={products} />}
      {deliveryMethod == "hente" && <PickUp products={products} />}
    </Container>
  );
}
