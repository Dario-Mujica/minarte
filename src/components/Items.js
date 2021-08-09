import React from "react";
import "./items.css";
import ItemCount from "./ItemCount";
import FotoRig from "./img/rigFoto.jpg";
import i310100 from "./img/i310100.jpg";
import mother from "./img/mother.jpg";
import ram from "./img/ram.jpg";

function Item({ name, price, pic, stock }) {
  return (
    <div className="fondoP">
      <div className="cards">
        <h3>{name}</h3> <h4> {price}</h4>
        <img src={pic} alt="foto producto" />
        <h5 className="stock">STOCK: {stock} </h5>
        <br />
        <ItemCount
          stock={stock}
          onAdd={() => alert("AGREGADO CORRECTAMENTE")}
        />
      </div>
    </div>
  );
}

function ItemListContainer() {
  const productos = [
    {
      id: "1",
      name: "RIG MINERO 3x3070",
      price: "$4.500 USD",
      pic: { FotoRig },
      stock: "1",
    },
    {
      id: "2",
      name: "RIG MINERO 6x3070",
      price: "$9.500 USD",
      pic: { FotoRig },
      stock: "7",
    },
    {
      id: "3",
      name: "RIG MINERO 8x3070",
      price: "$13.000 USD",
      pic: { FotoRig },
      stock: "5",
    },
    {
      id: "4",
      name: "RIG MINERO 6x3080",
      price: "$12.000 USD",
      pic: { FotoRig },
      stock: "21",
    },
    {
      id: "5",
      name: "INTEL CORE I3 10100",
      price: "$100 USD",
      pic: { i310100 },
      stock: "10",
    },
    {
      id: "6",
      name: "8GB DDR4 2666 SINGLE DIMM",
      price: "$20 USD",
      pic: { ram },
      stock: "4",
    },
    {
      id: "7",
      name: "MOTHERBOARD MSI B460 MAG",
      price: "$300 USD",
      pic: { mother },
      stock: "9",
    },
  ];

  const ItemList = productos.map((user) => (
    <Item
      key={user.id}
      name={user.name}
      price={user.price}
      pic={user.stock}
      stock={user.stock}
    />
  ));

  return (
    <>
      <div className="container">{ItemList}</div>
    </>
  );
}

export default ItemListContainer;
