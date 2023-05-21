import "./App.scss";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Catigories from "./components/Catigories/Catigories";
import Sort from "./components/Sort/Sort";
import CardList from "./components/CardList/CardList";
// import data from "./assets/data/pizza.json";
import { API } from "./API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchOrdersByCategory = createAsyncThunk(
    "pizzas/fetchByCategory",
    async (category, thunkAPI) => {
      try {
        const result = await API.get();
        console.log(result);
        setData(result);
        // return result.data.data.userWithPet;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  fetchOrdersByCategory();


  if (!data) {
    return
  }
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
