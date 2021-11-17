import { makeStyles } from "@material-ui/core";

const LandingPageStyles = makeStyles({
  imgWrapper: {
    margin: "auto",
    borderRadius: "20px",
    height: "200px",
    width: "100%",
  },
  img: {
    maxWidth: "100%",

    objectFit: "contain",
  },
});

export default LandingPageStyles;
