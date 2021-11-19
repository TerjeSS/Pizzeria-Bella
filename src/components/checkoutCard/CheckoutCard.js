import React from "react";
import checkoutCardStyle from "./CheckoutCardstyle";
// material ui components:
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
// icons and png
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import glutenImg from "./img/gluten.png";

export default function CheckoutCard() {
  const style = checkoutCardStyle();
  const cards = [1, 2, 3, 4];
  return (
    <Container className={style.cardGrid}>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={style.card} style={{ backgroundColor: "#E9EDF0" }}>
              <CardMedia
                className={style.cardMedia}
                image="https://source.unsplash.com/random/"
                title="Image title"
              />
              <Box>
                <CardContent className={style.cardContent}>
                  <Typography gutterBottom variant="h5">
                    scavere
                  </Typography>
                  <Typography>Total: 80;</Typography>
                </CardContent>
              </Box>

              <Box className={style.columnBox}>
                <Box>
                  <img src={glutenImg} className={style.pngIcon} />
                  <DeleteIcon />
                  <DeleteIcon />
                </Box>
                <Box className={style.rowBox}>
                  <IconButton aria-label="add" size="large">
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <div>1</div>
                  <IconButton aria-label="add" size="large">
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box className={style.delete}>
                <IconButton aria-label="delete" size="large">
                  <DeleteOutlineIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
