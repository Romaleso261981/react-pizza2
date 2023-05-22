import { useState } from "react";
import "./categories.scss";

const category = [
  "Всі",
  "М'ясні",
  "Вегетаріанські",
  "Гриль",
  "Гострі",
  "Закриті",
];

function Catigories({ setCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
    setCategory(category[index]);
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        {category.map((item, i) => (
          <li
            key={i}
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
