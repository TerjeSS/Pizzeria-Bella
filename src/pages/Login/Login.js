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
          padding: "20px",
          boxShadow:
            "rgba(0, 0, 0, 0.5) 0px 2px 8px -2px, rgba(0, 0, 0, 0.08) 1px 0px 2px 1px",
        }}
      >
        Logg inn er under utvikling. Følg med!
      </div>
      <Link to="/">
        <Button variant="contained">Tilbake til forsiden</Button>
      </Link>
    </div>
  );
};

export default Login;
