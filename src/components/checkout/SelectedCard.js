import React, { useState } from "react";
import SelectedCardStyle from "./SelectedCardStyle";

import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
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
  const [removeMessage, setRemoveMessage] = useState(false);
  const style = SelectedCardStyle();
  const { shoppingCart, setShoppingCart, setCount, count } = props;
  const handleRemoveMessage = () => {
    setRemoveMessage(false);
  };
  const removeItem = (e) => {
    setRemoveMessage((prevRemoveMessage) => {
      return !prevRemoveMessage;
    });
    setCount(count - 1);
    const removeid = e.currentTarget.getAttribute("removeid");
    const newArray = shoppingCart.filter(
      (product) => product.uniqe != removeid
    );
    console.log(e.currentTarget.getAttribute("removeid"));

    setShoppingCart([...newArray]);
    console.log(newArray);
  };

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit">
        <CloseIcon onClick={handleRemoveMessage} fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Grid container spacing={3}>
        {shoppingCart.map((product) => (
          <Grid item key={product.uniqe} xs={12} sm={12} md={6} lg={6}>
            <Card
              className={style.card}
              style={{ backgroundColor: "#E9EDF0", borderRadius: "10px" }}
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
                  <IconButton aria-label="add" size="small">
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <Typography>{product.selectedQuantity}</Typography>
                  <IconButton aria-label="add" size="small">
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
      <div>
        <Snackbar
          open={removeMessage}
          autoHideDuration={1000}
          onClose={handleRemoveMessage}
          message="Varen er fjernet"
          action={action}
        />
      </div>
    </>
  );
}
