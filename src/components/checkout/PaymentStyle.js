import { makeStyles } from "@mui/styles";

const PaymentStyle = makeStyles((theme) => ({
  columnBox: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  rowBox: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "10px",
  },
  pngIcon: {
    height: "60px",
  },
})); // returns an object that contains all the styles

export default PaymentStyle;
