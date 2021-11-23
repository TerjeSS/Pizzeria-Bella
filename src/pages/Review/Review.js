import { Container } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React from "react";
import cook from "../../img/cook.svg";
import "./review.css";
const Review = () => {
  const reviews = [
    {
      name: "ole",
      star: "⭐⭐⭐☆☆",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida quam eu porta porttitor. Vestibulum et justo vitae eros sodales sollicitudin eu vel lorem. ",
    },
    {
      name: "Jesper",
      star: "⭐⭐⭐⭐⭐",
      description: "Dette var jævla digg! Her bestiller jeg definitivt mer mat",
    },
    {
      name: "Ola",
      star: "⭐⭐⭐⭐☆",
      description:
        "Likte maten veldig godt. Men Ville kanskje hatt mulighet til ...",
    },
  ];
  console.log(reviews);

  return (
    <Container className="container">
      <div className="wrapper">
        <h2 style={{ fontFamily: "poppins", fontWeight: "400" }}>
          Anmeldelser
        </h2>
        <img src={cook} style={{ width: "100px" }} alt="" />
      </div>
      <div>
        {reviews.map((item) => {
          return (
            <div
              style={{
                border: "1px solid #ececec",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px",
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                background: "#E9EDF0",
                fontFamily: "poppins",
                fontWeight: "400",
              }}
            >
              <h4>Navn: {item.name}</h4>
              <p>{item.star}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Review;
