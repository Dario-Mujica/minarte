import "./Items.css";
import Item from "./ItemDetail.jsx";
import productos from "./Products";

function ItemList() {
    const ItemList = productos.map((user) => (
        <Item
          key={user.id}
          name={user.name}
          price={user.price}
          description={user.description}
          pic={user.pic}
          stock={user.stock}
        />
      ));
    
      return (
        <>
          <div className="container">{ItemList}</div>
        </>
      );
    }
    
    export default ItemList;