import "./App.scss";
import "./scss/app.scss";
// import { API } from "../../API";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Catigories from "./components/Catigories/Catigories";
import Sort from "./components/Sort/Sort";
import CardList from "./components/CardList/CardList";
// import data from "./assets/data/pizza.json";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(category);
  console.log(sorting);

  useEffect(() => {
    fetch("https://637c7e5a16c1b892ebb51407.mockapi.io/api/pizass")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(true);
      });
  }, []);

  if (!data) {
    console.log(data);
    return;
  }

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

export default App;
