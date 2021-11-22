import { makeStyles } from "@material-ui/core";

const TopStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },

  btn: {
    color: "#fff",
    textDecoration: "none",
    backgroundColor: "#0F2841",
    marginBottom: "20px",
    fontSize: "12px",
    fontWeight: "400",
    "&:hover": {
      backgroundColor: "#2C3D4F",
    },
  },
});

export default TopStyles;
