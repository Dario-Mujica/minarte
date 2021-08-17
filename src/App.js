import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Lista from "./components//itemList/ItemListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Housing from "./components/housing/housing";
import Nosotros from "./components/nosotros/nosotros";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catalogo">
            <Lista />
          </Route>
          <Route exact path="/housing">
            <Housing />
          </Route>
          <Route exact path="/nosotros">
            <Nosotros />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
