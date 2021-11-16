import React from "react";
import { Grid } from "@mui/material";

const LandingPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} style={{ backgroundColor: "#252525" }}>
        <item>xs=8</item>
      </Grid>
      <Grid item xs={12} sm={6} style={{ backgroundColor: "#ececec" }}>
        <item>xs=4</item>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#ec2424" }}>
        <item>xs=4</item>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#25d221" }}>
        <item>xs=8</item>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
