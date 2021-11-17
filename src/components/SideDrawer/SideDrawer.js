import React from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

import sideDrawerStyles from "./sideDrawerStyles";

const SideDrawer = ({ toggleDrawer, handleToggle }) => {
  const styles = sideDrawerStyles();

  return (
    <div>
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={toggleDrawer}
        onClose={handleToggle}
      >
        <Box className={styles.sidebarWrapper}>
          <IconButton
            className={styles.close}
            style={{
              color: "#515151",
              display: "flex",
              justifyContent: "end",
              margin: "10px 0",
              marginRight: "20px",
              borderRadius: "none",
            }}
            size="medium"
            edge="end"
            aria-label="menu"
          >
            <CloseIcon onClick={handleToggle} />
          </IconButton>
          <ListItem className={styles.sidebarLinks}>
            <Link className={styles.link} to="/">
              Hjem
            </Link>
            <Link className={styles.link} to="/menu">
              Meny
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: "none" }} to="/checkout">
              <Button className={styles.btn} variant="contained">
                Checkout
              </Button>
            </Link>
          </ListItem>
        </Box>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
