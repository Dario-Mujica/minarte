import React from "react";
import "./ItemListContainer.css";
import Productos from "./ItemList";

export default function Lista() {
  
  return (
    <>
      <div className="centerText">
        <h1>INSUMOS</h1>
        <Productos />
      </div>
    </>
  );
}
