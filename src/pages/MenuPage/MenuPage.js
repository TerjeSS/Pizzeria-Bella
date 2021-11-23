import { Container, Grid, Link, TextField } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import FoodItem from "../../components/FoodMenu/FoodItem";
import Products from "../../Products";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const MenuPage = (props) => {
  const {
    shoppingCart,
    setShoppingCart,
    addToCart,
    quantity,
    setQuantity,
    message,
    closeMessage,
  } = props;

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const filteredProducts = Products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit">
        <CloseIcon onClick={closeMessage} fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Container>
      <Box component="form" style={{ marginTop: "40px" }}>
        <TextField
          fullWidth
          margin="normal"
          id="search"
          label="Søk etter rett"
          variant="outlined"
          value={searchValue}
          onChange={handleInputChange}
        />
      </Box>
      <Box
        component="h5"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link href="#">Pizza</Link>
        <Link href="#">Pizzaaa</Link>
        <Link href="#">Tilbehør</Link>
        <Link href="#">Drikke</Link>
        <Link href="#">Dessert</Link>
      </Box>
      <Grid container spacing="3">
        {filteredProducts.map((object) => {
          return (
            <FoodItem
              {...object}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              addToCart={addToCart}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          );
        })}
      </Grid>
      <div>
        <Snackbar
          open={message}
          autoHideDuration={1000}
          onClose={closeMessage}
          message="Varen er lagt til"
          action={action}
        />
      </div>
    </Container>
  );
};

export default MenuPage;
