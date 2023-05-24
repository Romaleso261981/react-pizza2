import { Link } from "react-router-dom";
import logo from "../../assets/img/pizza-logo.svg";
import Navigation from "../Navigation/Navigation";

import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="Pizza logo" />
        </div>
      </Link>
      <Navigation />
      <div className="header__content">
        <h1 className="header__content-title">React Pizza</h1>
        <p className="header__content-text">самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
}
export default Header;
