import LogoCarrito from "./img/cart.png";
import "./CartWidget.css";

export default function CarritoLogo() {
  return (
    <>
      <div>
        <a>
          <img src={LogoCarrito} alt="Logo Carrito" />
        </a>
      </div>
    </>
  );
}
