import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Login = () => {
  return (
    <div
      style={{
        width: "100wv",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          border: "1px solid #fff",
        }}
      >
        Logg inn er under utvikling. Følg med!
      </div>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button
          style={{ background: "#0F2841", color: "#fff" }}
          variant="contained"
        >
          Tilbake til forsiden
        </Button>
      </Link>
    </div>
  );
};

export default Login;
