import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Catigories from "./components/Catigories/Catigories";
import Sort from "./components/Sort/Sort";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Catigories />
            <Sort />
          </div>
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default App;
