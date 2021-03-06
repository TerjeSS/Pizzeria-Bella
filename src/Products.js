const Products = [
  {
    name: "Dolce",
    id: 1,
    priceSmall: 160,
    priceLarge: 220,
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
    priceSmall: 160,
    priceLarge: 220,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Kylling, sopp, rødløk, paprika. Laget med ferske saftige bifftomater, og vår kjente hjemmelagde saus. Allergener: Hvete",
    image:
      "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    category: "pizza",
  },
  {
    name: "Paganini",
    id: 3,
    priceSmall: 160,
    priceLarge: 220,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Parmaskinke, pesto, gorgonzola. Laget med ferske tomater, og vår kjente hjemmelagde saus. Kokkens favoritt. Allergener: Hvete, melk",
    image:
      "https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1142&q=80",
    category: "pizza",
  },
  {
    name: "Fellini",
    id: 4,
    priceSmall: 160,
    priceLarge: 220,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Parmaskinke, cherrytomat, ruccola, parmeggiano. Laget med ferske tomater, og vår kjente hjemmelagde saus. Allergener: Hvete, soya  ",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "Laget med ferske tomater, og vår kjente hjemmelagde saus",
    category: "pizza",
  },
  {
    name: "Diavola",
    id: 5,
    priceSmall: 160,
    priceLarge: 220,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Salami, oliven, chili. Laget med ferske tomater, og vår kjente hjemmelagde saus. Extra spicy! Allergener: Hvete ",
    allergens: "hvete",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "Laget med ferske tomater, og vår kjente hjemmelagde saus",
    category: "pizza",
  },
  {
    name: "Carbonara",
    id: 6,
    priceSmall: 99,
    priceLarge: 149,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Tagliatelle, bacon, egg, parmeggiano. Deilig karbonara med ferske egg, og tørrsaltet bacon. Allergener: Hvete,egg, melk.",
    image:
      "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    category: "pasta",
  },
  {
    name: "Bolognese",
    id: 7,
    priceSmall: 99,
    priceLarge: 149,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Pasta penne, storfekjøtt, løk, tomater. Laget med hjemmelaget, langtidskokt pastasaus. Allergener: Hvete",
    image:
      "https://images.unsplash.com/photo-1600803734709-83f30a78e312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    category: "pasta",
  },
  {
    name: "Lasagne",
    id: 8,
    priceSmall: 99,
    priceLarge: 149,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Kjøttdeig, ost, løk, hvitløk. Laget med hjemmelaget, langtidskokt pastasaus. Allergener: Hvete",
    image:
      "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "pasta",
  },
  {
    name: "CocaCola",
    id: 9,
    priceSmall: 29,
    priceLarge: 35,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Iskald Coca Cola med isbiter. Størrelse stor er 0,5L, størrelse liten er 0.33L",
    image:
      "https://www.pngall.com/wp-content/uploads/2016/04/Coca-Cola-PNG-Picture.png",
    category: "drink",
  },
  {
    name: "Pepsi",
    id: 10,
    priceSmall: 29,
    priceLarge: 35,
    selectedSize: "",
    realPrice: 0,
    selectedQuantity: 0,
    ingredients:
      "Iskald Pepsi Max med isbiter. Størrelse stor er 0,5L, størrelse liten er 0.33L",
    image: "https://www.cooperscandy.no/cache/8a/600x600-prod_25375.png",
    category: "drink",
  },
];

export default Products;
