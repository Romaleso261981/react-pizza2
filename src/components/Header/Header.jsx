import logo from "../../assets/pizza-logo.svg";
import Button from "../Button/Button";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <Button />
        </div>
      </div>
    </div>
  );
}
export default Header;
