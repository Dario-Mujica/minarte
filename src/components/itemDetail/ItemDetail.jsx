import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ name, price, description, pic, stock }) {
  return (
    <div className="fondoP">
      <div className="cards">
        <h3>{name}</h3>
        <h4>{price}</h4>
        <img src={pic} alt="foto producto" />
        <h5>{description}</h5>
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

export default ItemDetail;
