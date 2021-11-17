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
  },
  cardMedia: {
    height: "100%",
    width: "33%",
  },
  columnBox: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  cardContent: {},
  delete: {
    margin: "auto",
  },
})); // returns an object that contains all the styles

export default checkoutCardStyle;
