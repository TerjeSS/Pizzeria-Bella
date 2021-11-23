import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Container, IconButton } from "@mui/material";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import TopStyles from "./TopDrawerStyles";
import SelectedCard from "../checkout/SelectedCard";
const TopDrawer = ({
  toggleTopDrawer,
  handleTopToggle,
  shoppingCart,
  areThereItems,
}) => {
  const styles = TopStyles();

  return (
    <div>
      <Drawer
        anchor={"top"}
        variant="temporary"
        open={toggleTopDrawer}
        onClose={handleTopToggle}
      >
        <Container>
          {!areThereItems ? (
            <Box
              style={{
                padding: "20px 0",
                textAlign: "center",
                margin: "50px 0",
              }}
            >
              Det er ikke lagt til noe i handlevognen
            </Box>
          ) : (
            <div>
              <Box>
                <SelectedCard shoppingCart={shoppingCart} />
              </Box>
              <Box className={styles.wrapper}>
                <Link style={{ textDecoration: "none" }} to="/checkout">
                  <Button
                    onClick={handleTopToggle}
                    className={styles.btn}
                    variant="contained"
                  >
                    Checkout
                  </Button>
                </Link>
              </Box>
            </div>
          )}
        </Container>
      </Drawer>
    </div>
  );
};

export default TopDrawer;
