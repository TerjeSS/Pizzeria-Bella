import { makeStyles } from "@material-ui/core";

const LandingPageStyles = makeStyles({
  imgWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    borderRadius: "20px",
    height: "230px",
    width: "100%",
    marginBottom: "27px",
    boxShadow:
      "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",

    "&::before": {
      position: "absolute",
      content: '""',
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",

      backgroundColor: "rgba(0,0,0, 0.3)",
      display: "block",
      borderRadius: "20px",
    },
  },

  imgWrapper2: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    margin: "auto",
    borderRadius: "20px",
    height: "150px",
    width: "100%",
    marginBottom: "27px",
    boxShadow:
      "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",

    "&::before": {
      position: "absolute",
      content: '""',
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",

      backgroundColor: "rgba(0,0,0, 0.3)",
      display: "block",
      borderRadius: "20px",
    },
  },

  line: {
    height: "1.3px",
    background: "#000",
    display: "block",
    width: "100px",
    margin: "auto",
    marginBottom: "27px",
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});

export default LandingPageStyles;
