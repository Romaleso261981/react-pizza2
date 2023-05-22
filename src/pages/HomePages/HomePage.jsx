import Catigories from "../../components/Catigories/Catigories";
import Sort from "../../components/Sort/Sort";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import PizzaTitle from "../../components/MainTitle/MainTitle";
import "./HomePage.scss";

function HomePage({ setCategory, setSorting, loading, data }) {
  return (
    <Container>
      <Header />
      <div className="content">
        <div className="content__top">
          <Catigories setCategory={setCategory} />
          <Sort
            setSorting={setSorting}
            title={"Сортування за"}
            sort={["популярностю", "ціною", "алфавітом"]}
          />
        </div>
        <PizzaTitle content="Сама найкраща піцца" />
        {!loading && <Loader />}
        {loading && <CardList data={data} />}
      </div>
    </Container>
  );
}

export default HomePage;
