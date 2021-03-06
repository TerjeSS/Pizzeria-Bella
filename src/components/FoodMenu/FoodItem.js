import {
  Grid,
  Card,
  IconButton,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import useStyles from "../../materialStyles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import bolognese from "../../img/bolognese.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Quantity from "./Quantity";
import { Box, height } from "@mui/system";
import Products from "../../Products";

const FoodItem = (props) => {
  const {
    name,
    priceSmall,
    priceLarge,
    ingredients,
    image,
    id,
    selectedSize,
    shoppingCart,
    setShoppingCart,
    addToCart,
    quantity,
    setQuantity,
  } = props;

  const [quant, setQuant] = useState(1);

  //funksjon for å utvide kortet med riktig state.
  const dotsClicked = () => {
    setExpanded(!expanded);
  };
  const [expanded, setExpanded] = useState(false);

  //Size method
  const [storrelse, setStorrelse] = useState("liten");

  const handleSize = (e) => {
    setStorrelse(e.target.value);
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: "20px",
          border: "1px solid black",
          backgroundColor: "#E9EDF0",
        }}
      >
        <Grid container direction="row" style={{}} alignItems="center">
          <Grid
            item
            xs={3}
            md={3}
            lg={5}
            style={{ height: "100%", marginRight: "11px" }}
            onClick={dotsClicked}
          >
            <img
              src={image}
              alt={name}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Grid>
          <Grid
            item
            container
            xs={7}
            md={7}
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography
              component="h5"
              variant="h5"
              onClick={dotsClicked}
              style={{
                margin: "5px 0 0 10px",
                fontWeight: "400",
                fontFamily: "poppins",
                color: "#515151",
              }}
            >
              {name}
            </Typography>
            <Typography
              style={{
                fontSize: "16px",
                margin: "10px",
                lineHeight: "1.8",
                fontFamily: "poppins",
                color: "#515151",
              }}
              onClick={dotsClicked}
            >
              {expanded ? ingredients : `${ingredients.substring(0, 25)}...`}
            </Typography>
            <Grid item style={{ position: "relative" }}>
              <Box display={{ fontSize: "12px" }}>
                <RadioGroup
                  row
                  defaultValue="liten"
                  name="størrelse"
                  onClick={handleSize}
                >
                  <FormControlLabel
                    value="liten"
                    size="small"
                    label={`Liten: ${priceSmall},-`}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ fontSize: "1px" }}
                    value="stor"
                    size="small"
                    control={<Radio />}
                    label={`Stor: ${priceLarge},-`}
                  />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={1}
            md={1}
            lg={1}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginRight: "7px",
              height: "100%",
            }}
          >
            <IconButton
              style={{
                padding: "0",
                marginRight: "1px",
                marginTop: "30px",
              }}
              edge="end"
              size="large"
              value={id}
              onClick={(e) => addToCart(e, quant, storrelse)}
            >
              <AddShoppingCartIcon
                style={{ fontSize: "36px", color: "#515151" }}
              />
            </IconButton>
            <IconButton
              style={{ padding: "0", marginRight: "1px" }}
              edge="end"
              size="large"
            >
              {expanded ? (
                <Quantity quant={quant} setQuant={setQuant} />
              ) : (
                <MoreHorizIcon
                  onClick={dotsClicked}
                  style={{ marginTop: "34px" }}
                />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default FoodItem;
