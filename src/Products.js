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
    allergens: "hvete",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=962&q=80",
    description: "Laget med ferske tomater, og vår kjente hjemmelagde saus",
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
    allergens: "hvete",
    image:
      "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    description: "Laget med ferske tomater, og vår kjente hjemmelagde saus",
    category: "pizza",
  },
  {
    name: "Paganini",
    id: 3,
    priceSmall: 160,
    priceLarge: 220,
    ingredients:
      "Parmaskinke, pesto, gorgonzola. Laget med ferske tomater, og vår kjente hjemmelagde saus. Kokkens favoritt. Allergener: Hvete, melk",
    allergens: "hvete og melk",
    image:
      "https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1142&q=80",
    description: "Laget med ferske tomater, og vår kjente hjemmelagde saus",
    category: "pizza",
  },
  {
    name: "Fellini",
    id: 4,
    priceSmall: 160,
    priceLarge: 220,
    ingredients:
      "Parmaskinke, cherrytomat, ruccola, parmeggiano. Laget med ferske tomater, og vår kjente hjemmelagde saus. Allergener: Hvete, soya  ",
    allergens: "hvete",
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
    ingredients: "Tagliatelle, bacon, egg, parmeggiano",
    allergens: "Egg, hvete, melk",
    image:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "Deilig karbonara med ferske egg, og tørrsaltet bacon",
    category: "pasta",
  },
  {
    name: "Bolognese",
    id: 7,
    priceSmall: 99,
    priceLarge: 149,
    ingredients: "Penne, storfekjøtt, løk",
    allergens: "Hvetea",
    image:
      "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
    description: "Pasta Penne med langtidskokt bolognese-saus",
    category: "pasta",
  },
  {
    name: "Lasagne",
    id: 8,
    priceSmall: 99,
    priceLarge: 149,
    ingredients: "Kjøttdeig, ost, løk, hvitløk",
    allergens: "Hvetea",
    image:
      "https://images.unsplash.com/photo-1619894991209-9f9694be045a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    description: "Pasta Penne med langtidskokt bolognese-saus",
    category: "pasta",
  },
  {
    name: "CocaCola",
    id: 9,
    priceSmall: 29,
    priceLarge: 35,
    ingredients:
      "Iskald Coca Cola med isbiter. Størrelse stor er 0,5L, størrelse liten er 0.33L",
    image:
      "https://www.pngall.com/wp-content/uploads/2016/04/Coca-Cola-PNG-Picture.png",
    category: "drink",
  },
  {
    name: "pepsi",
    id: 10,
    priceSmall: 29,
    priceLarge: 35,
    ingredients:
      "Iskald Pepsi Max med isbiter. Størrelse stor er 0,5L, størrelse liten er 0.33L",
    image: "https://image.pngaaa.com/54/890054-middle.png",
    category: "drink",
  },
];

export default Products;
