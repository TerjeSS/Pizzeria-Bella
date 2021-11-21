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

export default function Total(props) {
  const prices = props.products.map((product) => {
    return product.price;
  });
  const reducer = (accumulator, curr) => accumulator + curr;
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
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Typography variant="h6">Tilberedningstid: </Typography>
        <Typography variant="h6">Ca 25 min </Typography>
      </Box>

      <Box>
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          label="Navn"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          label="Adresse"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          label="Telefon"
          variant="outlined"
        />
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Typography variant="h4">Sum: </Typography>
        <Typography variant="h4">{prices.reduce(reducer)} kr </Typography>
      </Box>
    </Container>
  );
}
