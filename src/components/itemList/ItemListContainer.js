import React from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import ItemDeteailContainer from "../itemDetail/itemDetailContainer";
export default function Lista() {
  
  return (
    <>
      <div className="centerText">
        <h1>INSUMOS</h1>
        <ItemList />
        <ItemDeteailContainer/>
      </div>
    </>
  );
}
