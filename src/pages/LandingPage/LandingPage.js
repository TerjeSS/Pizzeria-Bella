import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import pizza from "../../img/pizza2.jpg";
import pizza2 from "../../img/pizza3.jpg";
import spaghetti from "../../img/spaghetti2.jpg";
import { Link } from "react-router-dom";
import LandingPageStyles from "./LandingPageStyles";
import { Container } from "@material-ui/core";

//svgs
import slice from "../../img/slice.svg";
const LandingPage = () => {
  const styles = LandingPageStyles();

  return (
    <Container style={{ marginTop: "100px" }}>
      <Box>
        <Link to="/menu">
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
        </Link>
        <div className={styles.line}></div>
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
          <h1
            style={{
              position: "absolute",
              color: "#fff",
              top: "20px",
            }}
          >
            Ukens tilbud
          </h1>
        </div>
        <div className={styles.imgWrapper}>
          <img
            src={pizza2}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            alt="bowl of spaghetti"
          />
          <h1
            style={{
              position: "absolute",
              color: "#fff",
              top: "60px",
            }}
          >
            Favoritt
          </h1>
        </div>
      </Box>
    </Container>
  );
};

export default LandingPage;
