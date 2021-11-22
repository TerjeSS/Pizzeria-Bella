import React from "react";
import FooterStyles from "./FooterStyles";
import Box from "@material-ui/core/Box";
import { Container, Grid, Typography } from "@material-ui/core";
import { fontWeight } from "@mui/system";

const Footer = () => {
  const style = FooterStyles();
  return (
    <Box
      style={{ boxShadow: "rgb(0 0 0 / 50%) 0px 1px 5px 1px inset" }}
      className={style.footer}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={4} sm={4}>
            <Typography
              className={style.footerh1}
              gutterBottom
              variant="h5"
              component="h1"
            >
              Kontakt info
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              E-post: Italieno@norsk.no
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              Tlf: 58 23 52 53
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              Adresse: pizzaveien 3 2053 Oslo
            </Typography>
            <Typography
              className={style.footerh1}
              gutterBottom
              variant="h5"
              component="h1"
            >
              Åpningstider
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              Man-fre: 11:00 - 22:00
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              Lør-søn: 12:00 - 21:00
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
