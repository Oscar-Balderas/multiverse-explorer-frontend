import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation" aria-label="Navegación principal">
      <NavLink className="navigation__link" to="/">
        Inicio
      </NavLink>
      <NavLink className="navigation__link" to="/characters">
        Personajes
      </NavLink>
    </nav>
  );
}

export default Navigation;
