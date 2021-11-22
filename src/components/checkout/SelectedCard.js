import React, { useState } from "react";
import SelectedCardStyle from "./SelectedCardStyle";
// material ui components:
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
// icons and png
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import glutenImg from "./img/gluten.png";
import milkImg from "./img/milk-bottle.png";
import soyaImg from "./img/soya.png";
import trashImg from "./img/trash.png";
import Products from "../../Products";

export default function SelectedCard(props) {
  const style = SelectedCardStyle();
  const { shoppingCart, setShoppingCart } = props;

  const removeItem = (e) => {
    const removeid = e.currentTarget.getAttribute("removeid");
    const newArray = shoppingCart.filter(
      (product) => product.uniqe != removeid
    );
    setShoppingCart([...newArray]);
    console.log(newArray);
  };

  const handleAddClick = (e) => {
    const productId = e.currentTarget.getAttribute("uniqueID");
    const index = shoppingCart.indexOf(productId);

    const newArray = shoppingCart.filter(
      (product) => product.uniqe == productId
    );
    // newArray[0].selectedQuantity += 1;
    const newQuantity = { ...newArray[0] };
    console.log(shoppingCart.indexOf(newQuantity));
    setShoppingCart([...shoppingCart, newQuantity]);
  };

  return (
    <Grid container spacing={3}>
      {shoppingCart.map((product) => (
        <Grid item key={product.uniqe} xs={12} sm={12} md={6} lg={6}>
          <Card
            className={style.card}
            style={{ backgroundColor: "#E9EDF0", borderRadius: "5%" }}
          >
            <CardMedia
              className={style.cardMedia}
              image={product.image}
              title="Image title"
            />

            <CardContent className={style.cardContent}>
              <Typography gutterBottom variant="h6">
                {product.name}
              </Typography>
              <Typography variant="subtitle2">
                Pris: {product.realPrice * product.selectedQuantity} ;
              </Typography>
            </CardContent>

            <Box className={style.columnBox}>
              <Box>
                <img src={glutenImg} className={style.pngIcon} />
                <img src={soyaImg} className={style.pngIcon} />
                <img src={milkImg} className={style.pngIcon} />
              </Box>
              <Box className={style.rowBox}>
                <IconButton
                  aria-label="add"
                  size="small"
                  uniqueID={product.uniqe}
                  onClick={handleAddClick}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
                <Typography>{product.selectedQuantity}</Typography>
                <IconButton
                  aria-label="add"
                  size="small"
                  uniqueID={product.uniqe}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </Box>
            </Box>
            <Box className={style.delete}>
              <IconButton
                aria-label="delete"
                removeid={product.uniqe}
                onClick={removeItem}
              >
                <img src={trashImg} className={style.deleteIcon} />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
