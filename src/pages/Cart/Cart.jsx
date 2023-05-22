import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";

import "./Cart.scss";

function Cart() {
  return (
    <>
      <Container>
        <Header />
        <div className="Cart__container">
          <h1>Cart</h1>
        </div>
      </Container>
    </>
  );
}

export default Cart;
