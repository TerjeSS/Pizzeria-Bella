import { makeStyles } from "@mui/styles";

const PaymentStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f5f5f5",
  },
  textFieldBox: {
    backgroundColor: "#c4c4c4",
    padding: "50px",
  },
  rowBox: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "10px",
  },
  pngIcon: {
    height: "60px",
  },
  btn: {
    margin: "30px 0",
    backgroundColor: "#0F2841",
  },
})); // returns an object that contains all the styles

export default PaymentStyle;
