import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import useStyles from "../materialStyles";

const Footer = () => {
  const style = useStyles();
  return (
    <div>
      <BottomNavigation
        className={style.footer}
        showLabels
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <div>
          <Typography variant="h5" component="h2">
            Adresse
          </Typography>
          ;
        </div>
      </BottomNavigation>
    </div>
  );
};

export default Footer;
