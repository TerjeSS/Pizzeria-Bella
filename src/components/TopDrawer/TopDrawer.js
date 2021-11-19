import React from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const TopDrawer = ({ toggleTopDrawer, handleTopToggle }) => {
  return (
    <div>
      <Drawer
        anchor={"top"}
        variant="temporary"
        open={toggleTopDrawer}
        onClose={handleTopToggle}
      >
        <Box>TOP SHIT</Box>
        <Box>TOP SHIT</Box>
        <Box>TOP SHIT</Box>
        <Box>TOP SHIT</Box>
        <Box>TOP SHIT</Box>
        <Box>TOP SHIT</Box>
        <Box>TOP SHIT</Box>
      </Drawer>
    </div>
  );
};

export default TopDrawer;
