import "./NavBar.css";
import CarritoLogo from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          MINARTE
        </a>
        <a href="#catalogo">CATALOGO</a>
        <a href="#housing">HOUSING</a>
        <a href="#nosotros">NOSOTROS</a>
        <a>
          <CarritoLogo />
        </a>
      </div>
    </>
  );
}



