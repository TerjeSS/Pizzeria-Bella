import React from "react";
import FooterStyles from "./FooterStyles";
import Box from "@material-ui/core/Box";
import { Container, Grid, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const style = FooterStyles();
  return (
    <Box
      style={{ boxShadow: "rgb(0 0 0 / 50%) 0px 1px 5px 1px inset" }}
      className={style.footer}
    >
      <Container>
        <Grid
          container
          direction="row"
          alignContent="center"
          justifyContent="center"
          spacing={3}
        >
          <Grid item xs={12} lg={4}>
            <Typography
              className={style.footerh1}
              gutterBottom
              variant="h5"
              component="h1"
            >
              Kontakt info
            </Typography>
            <Typography
              style={{ fontFamily: "poppins" }}
              gutterBottom
              variant="subtitle2"
            >
              E-post: Italieno@norsk.no
            </Typography>
            <Typography
              style={{ fontFamily: "poppins" }}
              gutterBottom
              variant="subtitle2"
            >
              Tlf: 58 23 52 53
            </Typography>
            <Typography
              style={{ fontFamily: "poppins" }}
              gutterBottom
              variant="subtitle2"
            >
              Adresse: pizzaveien 3 2053 Oslo
            </Typography>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Typography
              className={style.footerh1}
              gutterBottom
              variant="h5"
              component="h1"
            >
              Sosiale medier
            </Typography>
            <IconButton
              style={{ padding: "0" }}
              size="medium"
              edge="start"
              aria-label="social media"
            >
              <LinkedInIcon
                style={{
                  padding: "0",
                  color: "rgb(25, 118, 210)",
                  background: "#fff",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            <IconButton
              style={{ padding: "0" }}
              size="medium"
              edge="start"
              aria-label="social media"
            >
              <FacebookIcon
                style={{
                  color: "#4267B2",
                  background: "#fff",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            <IconButton
              style={{ padding: "0" }}
              size="medium"
              edge="start"
              aria-label="social media"
            >
              <TwitterIcon
                style={{
                  color: "rgb(25, 118, 210)",
                  background: "#fff",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            <IconButton
              style={{ padding: "0" }}
              size="medium"
              edge="start"
              aria-label="social media"
            >
              <InstagramIcon
                style={{
                  background:
                    "linear-gradient(to right bottom, #515BD4, #8134AF, #DD2A7B, #FEDA77,  #F58529)",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              className={style.footerh1}
              gutterBottom
              variant="h5"
              component="h1"
            >
              ??pningstider
            </Typography>
            <Typography
              style={{ fontFamily: "poppins" }}
              gutterBottom
              variant="subtitle2"
            >
              Man-fre: 11:00 - 22:00
            </Typography>
            <Typography
              style={{ fontFamily: "poppins" }}
              gutterBottom
              variant="subtitle2"
            >
              L??r-s??n: 12:00 - 21:00
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
