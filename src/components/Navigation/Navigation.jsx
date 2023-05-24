import { Link } from "react-router-dom";
import "./Navigation.module.scss";

function Navigation() {
  return (
    <div className="Navigation__container">
      <Link to="basket" className="navigation__link">
        Basked
      </Link>
      <Link to="cart" className="navigation__link">
        Card
      </Link>
      <Link to="full-pizza/1" className="navigation__link">
        FullPizza
      </Link>
      <Link to="login" className="navigation__link">
        LoginPage
      </Link>
    </div>
  );
}

export default Navigation;
