import { makeStyles } from "@material-ui/core";

const checkoutCardStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "f4f4f4",
  },
  box: {},
  icon: {
    // marginRight: "20px",
  },
  buttons: {
    // marginTop: "40px",
  },
  cardGrid: {
    // padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    borderRadius: "50%",
    border: "black",
    backgroundColor: "#D3D3D3",
  },
  cardMedia: {
    height: "100%",
    minWidth: "33%",
    objectFit: "cover",
  },
  columnBox: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  rowBox: {
    display: "flex",
    alignItems: "center",
  },
  cardContent: {},
  delete: {
    margin: "auto",
  },
  pngIcon: {
    height: "20px",
  },
})); // returns an object that contains all the styles

export default checkoutCardStyle;
