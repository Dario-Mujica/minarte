import React from "react";
import "./ItemListContainer.css";
import Productos from "./Items";

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
