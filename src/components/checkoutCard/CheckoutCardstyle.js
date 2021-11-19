import { makeStyles } from "@material-ui/core";

const checkoutCardStyle = makeStyles((theme) => ({
  card: {
    margin: "10px",
    height: "100px",
    minWidth: "300px",
    display: "flex",
    flexShrink: "1",
  },
  cardMedia: {
    height: "100%",
    minWidth: "23%",
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
    marginTop: "10px",
  },
  delete: {
    margin: "auto",
  },
  pngIcon: {
    height: "18px",
  },
  deleteIcon: {
    height: "40px",
  },
})); // returns an object that contains all the styles

export default checkoutCardStyle;
