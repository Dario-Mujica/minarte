import React, { useState } from "react";
import "./ItemCount.css";

export default function Counter({ initial = 1, stock = 0, onAdd = () => {} }) {
  const [userSelected, setUserSelected] = useState(initial);
  const increment = () => {
    if (userSelected < stock) setUserSelected(userSelected + 1);
  };
  const decrement = () => {
    if (userSelected > 0) setUserSelected(userSelected - 1);
  };
  return (
    <>
      <div>
        <div>
          <button onClick={() => increment()}>+</button>
          <button onClick={() => decrement()}>-</button>
          <div>{userSelected}</div>
          <button onClick={onAdd}>AGREGAR</button>
        </div>
      </div>
    </>
  );
}
