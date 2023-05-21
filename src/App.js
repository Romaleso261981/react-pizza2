import "./App.scss";
import "./scss/app.scss";
// import { API } from "../../API";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Catigories from "./components/Catigories/Catigories";
import Sort from "./components/Sort/Sort";
import CardList from "./components/CardList/CardList";
// import data from "./assets/data/pizza.json";

function App() {
  const [data, setData] = useState([]);

  //  const fetchOrdersByCategory = createAsyncThunk(
  //    "pizzas/fetchByCategory",
  //    async (category, thunkAPI) => {
  //      try {
  //         console.log("result");
  //        const result = await API.get();
  //        console.log(result);
  //        setData(result);
  //        // return result.data.data.userWithPet;
  //      } catch (error) {
  //        return thunkAPI.rejectWithValue(error.message);
  //      }
  //    }
  //   );

  useEffect(() => {
    fetch("https://637c7e5a16c1b892ebb51407.mockapi.io/api/pizass")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
      });
    // eslint-disable-next-line
  }, []);

  if (!data) {
    console.log(data);
    return;
  }
   console.log(data);

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
