import { makeStyles } from "@material-ui/core";

const drawerStyles = makeStyles({
  box: {},

  close: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: "10px 0",
    "&:hover": {
      borderRadius: "0",
    },
    "&:active": {
      borderRadius: "0",
    },
  },

  sidebarWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    height: "100%",
    width: "200px",
    fontFamily: "Poppins",
    fontSize: "18px",
  },
  sidebarLinks: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },

  link: {
    marginBottom: "20px",
    textAlign: "start",
    textDecoration: "none",
    width: "100%",
    color: "#515151",
    position: "relative",
    fontWeight: "400",

    "&:hover": {
      color: "#2C3D4F",
      transition: "0.3s ease",
    },
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

  links: {
    display: "flex",
    flexDirection: "column",
  },
});

export default drawerStyles;
