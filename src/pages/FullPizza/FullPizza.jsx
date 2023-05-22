import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import "./FullPizza.scss";

function FullPizza() {
  return (
    <Container>
      <Header />
      <div className="FullPizza__container">
        <h1>FullPizza</h1>
      </div>
    </Container>
  );
}

export default FullPizza;