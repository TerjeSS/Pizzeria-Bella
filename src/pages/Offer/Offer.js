import { Container } from "@material-ui/core";
import React from "react";

const product = [
  {
    name: "Dolce",
    id: 1,
    priceSmall: 100,
    priceLarge: 180,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Biffstrimler, cherrytomat, avocado. Laget med ferske tomater, og vår kjente hjemmelagde saus. Allergener: Hvete",
    image:
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    category: "pizza",
  },
  {
    name: "Figaro",
    id: 2,
    priceSmall: 100,
    priceLarge: 180,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Kylling, sopp, rødløk, paprika. Laget med ferske saftige bifftomater, og vår kjente hjemmelagde saus. Allergener: Hvete",
    image:
      "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    category: "pizza",
  },
];

const Offer = () => {
  return (
    <Container style={{ marginTop: "100px" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Dagens Tilbud</h1>
      </div>
      <div>
        {product.map((item) => {
          return (
            <div
              style={{
                with: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                border: "1px solid #ececec",
                marginBottom: "20px",
                padding: "20px",
                borderRadius: "10px",
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                background: "#E9EDF0",
              }}
            >
              <div
                style={{
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "100%" }} src={item.image} alt="" />
              </div>
              <h4>{item.name}</h4>
              <div
                style={{
                  display: "flex",
                  margin: "0",
                  padding: "0",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ margin: "0", padding: "0" }}>Stor pizza</h4>
                  <h6 style={{ margin: "0", padding: "0" }}>
                    Kun kr {item.priceLarge},-
                  </h6>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ margin: "0", padding: "0" }}>Liten pizza</h4>
                  <h6 style={{ margin: "0", padding: "0" }}>
                    Kun kr {item.priceSmall},-
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Offer;
