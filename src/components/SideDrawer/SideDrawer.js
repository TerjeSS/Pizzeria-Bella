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
        style={{ width: "100%" }}
        variant="temporary"
        anchor={"right"}
        open={toggleDrawer}
        onClose={handleToggle}
      >
        <div className={styles.sidebarWrapper}>
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
            <div className={styles.links}>
              <Link className={styles.link} to="/">
                Hjem
              </Link>
              <Link className={styles.link} to="/menu">
                Meny
              </Link>
              <div className={styles.link}>Åpningstider</div>
              <div className={styles.link}>Kontakt</div>
              <div className={styles.link}>Om oss</div>
              <div className={styles.link}>Min side</div>
            </div>
            <div>
              <Link style={{ textDecoration: "none" }} to="/checkout">
                <Button className={styles.btn} variant="contained">
                  Checkout
                </Button>
              </Link>
            </div>
          </ListItem>
          <ListItem></ListItem>
        </div>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
