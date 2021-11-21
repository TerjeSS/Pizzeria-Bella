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
import React from "react";
import HomeDelivery from "./HomeDelivery";
import SelectedProducts from "../../SelectedProducts";

export default function Total() {
  const { products } = SelectedProducts; //
  return (
    <Container>
      <FormControl component="fieldset">
        <RadioGroup
          style={{ display: "flex", flexDirection: "row", margin: "20px 0" }}
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
      <HomeDelivery products={products} />
    </Container>
  );
}
