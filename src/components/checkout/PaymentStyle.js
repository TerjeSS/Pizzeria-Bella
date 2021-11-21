import { makeStyles } from "@mui/styles";

const PaymentStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#ECECEC",
    paddingBottom: "50px",
  },
  textFieldBox: {
    backgroundColor: "#c4c4c4",
    padding: "30px",
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
