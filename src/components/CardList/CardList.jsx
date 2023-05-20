import PizzaTitle from "../PizzaTitle/PizzaTitle";
import PizzaItem from "./PizzaItem/PizzaItem";
import "./cardList.scss";

function CardList({ data }) {
  return (
    <div>
      <PizzaTitle content="Всі піцци" />
      <div className="content__items">
        {data &&
          data.map(({ title, url, description, status, cost, _id, type }) => (
            <PizzaItem
              key={_id}
              title={title}
              url={url}
              description={description}
              status={status}
              cost={cost}
              type={type}
            />
          ))}
      </div>
    </div>
  );
}

// .sort((a, b) => (a.date > b.date ? -1 : 1))
export default CardList;
