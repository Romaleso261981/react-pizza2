import { useState } from "react";
import "./categories.scss";

const category = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Catigories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {category.map((item, i) => (
          <li key={i}
            onClick={() => {
              onClickCategory(i);
            }}
            className={activeIndex === i ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Catigories;
