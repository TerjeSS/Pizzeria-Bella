import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <BottomNavigation
        showLabels
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigationAction label="Adresse:">
          Adresse
        </BottomNavigationAction>
      </BottomNavigation>
    </div>
  );
};

export default Footer;
