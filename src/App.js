import "./App.scss";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Catigories from "./components/Catigories/Catigories";
import Sort from "./components/Sort/Sort";
import CardList from "./components/CardList/CardList";
import data from "./assets/data/pizza.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Catigories />
            <Sort />
          </div>
          <CardList data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
