import React from "react";
import checkoutCardStyle from "./CheckoutCardstyle";
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

export default function CheckoutCard(props) {
  const style = checkoutCardStyle();
  const { products } = props;

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product} xs={12} sm={12} md={6} lg={6}>
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
              <Typography variant="subtitle1">
                Pris: {product.price};
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
                <Typography>1</Typography>
                <IconButton aria-label="add" size="small">
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </Box>
            </Box>
            <Box className={style.delete}>
              <IconButton aria-label="delete">
                <img src={trashImg} className={style.deleteIcon} />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
