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
    justifyContent: "space-between",
    height: "100%",
    width: "200px",
    fontFamily: "Poppins",
    fontSize: "18px",
  },
  sidebarLinks: {
    display: "flex",
    flexDirection: "column",
  },

  link: {
    marginBottom: "20px",
    textAlign: "start",
    textDecoration: "none",
    width: "100%",
    color: "#515151",
    position: "relative",
    fontWeight: "600",

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
    fontWeight: "600",

    "&:hover": {
      backgroundColor: "#2C3D4F",
    },
  },
});

export default drawerStyles;
