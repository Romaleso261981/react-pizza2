// import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import "./header.scss";

function Header() {
  return (
    <div class="header">
      <div class="container">
        <div class="header__logo">
          <img width="38" src="../../assets/plus.svg" alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div class="header__cart">
        <Button/>
        </div>
      </div>
    </div>
  );
}
export default Header;
