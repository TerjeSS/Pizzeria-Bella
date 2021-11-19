import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import pizza from "../../img/pizza2.jpg";
import carbonara from "../../img/carbonara.jpg";
import spaghetti from "../../img/spaghetti2.jpg";
import LandingPageStyles from "./LandingPageStyles";
import { Container } from "@material-ui/core";
const LandingPage = () => {
  const styles = LandingPageStyles();

  return (
    <Container style={{ marginTop: "100px" }}>
      <Box>
        <div className={styles.imgWrapper}>
          <img
            src={pizza}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            alt="a pizza"
          />
          <h1
            style={{
              position: "absolute",
              color: "#fff",
              top: "60px",
            }}
          >
            Bestill nå
          </h1>
        </div>
        <span className={styles.line}></span>
        <div className={styles.imgWrapper2}>
          <img
            src={spaghetti}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            alt="bowl of spaghetti"
          />
        </div>
        <div className={styles.imgWrapper}>
          <img
            style={{
              objectFit: "cover",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            alt="a plate with carbonara"
          />
        </div>
      </Box>
    </Container>
  );
};

export default LandingPage;
