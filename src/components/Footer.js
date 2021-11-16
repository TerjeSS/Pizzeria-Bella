import React from "react";
import useStyles from "../materialStyles";
import Box from "@material-ui/core/Box";
import { Container, Grid } from "@material-ui/core";

const Footer = () => {
  const style = useStyles();
  return (
    <Box className={style.footer}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Kontakt oss</Box>
            <Box>hei</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
