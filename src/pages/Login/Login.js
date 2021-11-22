import React from "react";
import { Link } from "react-router-dom";

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
        Login page is under development
      </div>
      <Link to="/">Return to front page</Link>
    </div>
  );
};

export default Login;
