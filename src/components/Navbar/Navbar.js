import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../materialStyles";

const Navbar = () => {
  const style = useStyles();

  return (
    <AppBar className={style.nav} position="static">
      <Toolbar sx={{ fontSize: "12px" }}>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
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
          }}
        >
          Logg inn
          <LoginIcon />
        </Typography>
        <IconButton
          component="div"
          size="medium"
          edge="end"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
