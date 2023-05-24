import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";

import "./BasketPages.module.scss";

function BasketPages() {
  return (
    <>
      <Container>
        <Header />
        <div className="BasketPages__container">
          <h1>BasketPages</h1>
        </div>
      </Container>
    </>
  );
}

export default BasketPages;
