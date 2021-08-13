import FotoRig from "./img/rigFoto.jpg";
import i310100 from "./img/i310100.jpg";
import mother from "./img/mother.jpg";
import ram from "./img/ram.jpg";

  const productos = [
    {
      id: "1",
      name: "RIG MINERO 3x3070",
      price: "$4.500 USD",
      pic: FotoRig ,
      description: "183mh de potencia",
      stock: "1",
    },
    {
      id: "2",
      name: "RIG MINERO 6x3070",
      price: "$9.500 USD",
      pic: FotoRig ,
      description: "369mh de potencia",
      stock: "7",
    },
    {
      id: "3",
      name: "RIG MINERO 8x3070",
      price: "$13.000 USD",
      pic:  FotoRig ,
      description: "500mh de potencia",
      stock: "5",
    },
    {
      id: "4",
      name: "RIG MINERO 6x3080",
      price: "$12.000 USD",
      pic: FotoRig,
      description: "6000mh de potencia",
      stock: "21",
    },
    {
      id: "5",
      name: "INTEL CORE I3 10100",
      price: "$100 USD",
      pic:  i310100 ,
      description: "socket LGA1200",
      stock: "10",
    },
    {
      id: "6",
      name: "8GB DDR4 2666 SINGLE DIMM",
      price: "$20 USD",
      pic:  ram ,
      description: "DDR4 2666MHZ",
      stock: "4",
    },
    {
      id: "7",
      name: "MOTHERBOARD MSI B460 MAG",
      price: "$300 USD",
      pic:  mother ,
      description: "amd mother",
      stock: "9",
    },
  ];

  export default productos;
