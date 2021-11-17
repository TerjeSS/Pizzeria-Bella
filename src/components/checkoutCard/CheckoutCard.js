import React from "react";
import checkoutCardStyle from "./CheckoutCardstyle";
// material ui components:
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Box,
  IconButton,
  SvgIcon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CheckoutCard() {
  const style = checkoutCardStyle();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container className={style.cardGrid}>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={style.card}>
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
                  <DeleteIcon />
                  <DeleteIcon />
                  <DeleteIcon />
                </Box>
                <Box>
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                    <DeleteIcon />
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box className={style.delete}>
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
