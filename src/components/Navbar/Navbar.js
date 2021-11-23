import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material";
import { Container } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../materialStyles";
import SideDrawer from "../SideDrawer/SideDrawer";
import TopDrawer from "../TopDrawer/TopDrawer";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const styles = useStyles();
  const { shoppingCart, setShoppingCart, setCount, count, areThereItems } = props;

  const [toggleTopDrawer, setToggleTopDrawer] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggle = () => {
    setToggleDrawer((prev) => {
      return (prev = !prev);
    });
  };

  const handleTopToggle = () => {
    setToggleTopDrawer((prev) => {
      return (prev = !prev);
    });
  };

  console.log(toggleDrawer);

  return (
    <>
      <TopDrawer
        areThereItems={areThereItems}
        toggleTopDrawer={toggleTopDrawer}
        handleTopToggle={handleTopToggle}
        shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              setCount={setCount}
              count={count}
      />
      <SideDrawer toggleDrawer={toggleDrawer} handleToggle={handleToggle} />
      <Container maxWidth="lg">
        <AppBar
          style={{
            backgroundColor: "#fff",
            boxShadow: "none",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "1",
          }}
          position="static"
        >
          <Toolbar sx={{ fontSize: "12px" }}>
            <IconButton
              style={{ color: "#515151" }}
              size="medium"
              edge="start"
              aria-label="menu"
            >
              <ShoppingCartIcon onClick={handleTopToggle} />
              <span>({count})</span>
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "#515151",

                cursor: "pointer",
              }}
            >
              <Link
                style={{
                  color: "#515151",
                  textDecoration: "none",
                  fontFamily: "poppins",
                }}
                to="/login"
              >
                {" "}
                Logg inn
              </Link>
              <LoginIcon />
            </Typography>

            <IconButton
              style={{ color: "#515151" }}
              component="div"
              size="medium"
              edge="end"
              aria-label="menu"
            >
              <MenuIcon onClick={handleToggle} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Navbar;
