import Header from "./components/Header/Header";
import Catigories from "./components/Catigories/Catigories";
import Sort from "./components/Sort/Sort";
import CardList from "./components/CardList/CardList";
import Loader from "./components/Loader/Loader";
import "./HomePage.scss";

function HomePage({ setCategory, setSorting, loading, data }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Catigories setCategory={setCategory} />
            <Sort
              setSorting={setSorting}
              title={"Сортування за"}
              sort={["популярностю", "ціною", "алфавітом"]}
            />
          </div>
          {!loading && <Loader />}
          {loading && <CardList data={data} />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
