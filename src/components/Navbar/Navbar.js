import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material";
import { Container } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../materialStyles";
import SideDrawer from "../SideDrawer/SideDrawer";

const Navbar = () => {
  const styles = useStyles();

  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggle = () => {
    setToggleDrawer((prev) => {
      return (prev = !prev);
    });
  };

  console.log(toggleDrawer);

  return (
    <>
      <SideDrawer toggleDrawer={toggleDrawer} handleToggle={handleToggle} />
      <AppBar
        style={{ backgroundColor: "#fff", boxShadow: "none" }}
        position="static"
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ fontSize: "12px" }}>
            <IconButton
              style={{ color: "#515151" }}
              size="medium"
              edge="start"
              aria-label="menu"
            >
              <ShoppingCartIcon />
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
              }}
            >
              Logg inn
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
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
