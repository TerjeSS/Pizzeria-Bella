import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import pizza from "../../img/pizza1.jpg";
import LandingPageStyles from "./LandingPageStyles";
import { Container } from "@material-ui/core";
const LandingPage = () => {
  const styles = LandingPageStyles();

  return (
    <Container>
      <Box>
        <Box>
          <img className={styles.img} src={pizza} alt="" />
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
