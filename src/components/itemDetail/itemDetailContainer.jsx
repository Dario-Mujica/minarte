import React from "react";
import ItemDetail from "./ItemDetail";
import FotoRig from "../img/rigFoto.jpg";


const getItems = new Promise((res) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        name: "RIG ESPECIAL MINERO 8x3090",
        price: "$500 USD",
        pic: FotoRig ,
        description: "Si tuviste la paciencia de esperar el timeout, mereces esta oferta, 960MH!",
        stock: "1",
      },
    
    ]);
  }, 2000);
});

const ItemDeteailContainer = () => {
  const [user, setuser] = React.useState();

  React.useEffect(() => {
    getItems.then((res) => {
      setuser(res[0]);
    });
  }, []);
  console.log(user);
  return (
    <>
      {user === undefined ? (
        <p></p>
      ) : (
        <ItemDetail
          key={user.id}
          name={user.name}
          price={user.price}
          description={user.description}
          pic={user.pic}
          stock={user.stock}
        />
      )}
    </>
  );
};

export default ItemDeteailContainer;
