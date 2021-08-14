import "./NavBar.css";
import CarritoLogo from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          MINARTE
        </a>
        <a href="#catalogo" className="medio">
          CATALOGO
        </a>
        <a href="#housing" className="medio">
          HOUSING
        </a>
        <a href="#nosotros" className="medio">
          NOSOTROS
        </a>
        <a href="#carrito" className="imgCarro">
          <CarritoLogo />
        </a>
      </div>
    </>
  );
}
