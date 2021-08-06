import React from "react";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount";
import FotoRig from "./img/rigFoto.jpg";
import i310100 from "./img/i310100.jpg";
import mother from "./img/mother.jpg";
import ram from "./img/ram.jpg";

export default function Lista() {
  return (
    <>
      <div className="centerText">
        <h1>INSUMOS</h1>
        <div className="fondoP">
          <div className="cards">
            <h3>RIG MINERO 3x3070</h3> <h4>$4.500 USD</h4>
            <img src={FotoRig} alt="foto producto" />
            <h5 className="stock">STOCK: 1 </h5>
            <ItemCount
              stock={1}
              onAdd={() => alert("AGREGADO CORRECTAMENTE")}
            />
          </div>
          <div className="cards">
            <h3>RIG MINERO 6x3070</h3> <h4>$9.500 USD</h4>
            <img src={FotoRig} alt="foto producto" />
            <h5 className="stock">STOCK: 7 </h5>
            <ItemCount
              stock={7}
              onAdd={() => alert("AGREGADO CORRECTAMENTE")}
            />
          </div>
          <div className="cards">
            <h3>RIG MINERO 8x3070</h3> <h4>$13.000 USD</h4>
            <img src={FotoRig} alt="foto producto" />
            <h5 className="stock">STOCK: 5 </h5>
            <ItemCount
              stock={5}
              onAdd={() => alert("AGREGADO CORRECTAMENTE")}
            />
          </div>
          <div className="cards">
            <h3>RIG MINERO 6x3080</h3> <h4>$12.000 USD</h4>
            <img src={FotoRig} alt="foto producto" />
            <h5 className="stock">STOCK: 21 </h5>
            <ItemCount
              stock={21}
              onAdd={() => alert("AGREGADO CORRECTAMENTE")}
            />
          </div>
          <div className="cards">
            <h3>INTEL CORE I3 10100</h3> <h4>$100 USD</h4>
            <img src={i310100} alt="foto producto" />
            <h5 className="stock">STOCK: 10 </h5>
            <ItemCount
              stock={10}
              onAdd={() => alert("AGREGADO CORRECTAMENTE")}
            />
          </div>
          <div className="cards">
            <h3>8GB DDR4 2666 SINGLE DIMM</h3> <h4>$20 USD</h4>
            <img src={ram} alt="foto producto" />
            <h5 className="stock">STOCK: 4 </h5>
            <ItemCount
              stock={4}
              onAdd={() => alert("AGREGADO CORRECTAMENTE")}
            />
          </div>
          <div className="cards">
            <h3>MOTHERBOARD MSI B460 MAG</h3>
            <h4>$300 USD</h4>
            <img src={mother} alt="foto producto" />
            <h5 className="stock">STOCK: 9 </h5>
            <ItemCount
              stock={9}
              onAdd={() => alert("AGREGADO CORRECTAMENTE")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
