import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

const Login = () => {
  return (
    <Container>
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
            fontFamily: "poppins",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Logg inn funksjon under utvikling. Følg med!
        </div>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button
            style={{
              background: "#0F2841",
              color: "#fff",
              fontFamily: "poppins",
            }}
            variant="contained"
          >
            Tilbake til forsiden
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Login;
