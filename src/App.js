import "./App.scss";
import "./scss/app.scss";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePages/HomePage";
import NotFound from "./pages/NotFound/NotFound";

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
    return;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            setCategory={setCategory}
            setSorting={setSorting}
            loading={loading}
            data={data}
          />
        }
      />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
