import PizzaTitle from "../PizzaTitle/PizzaTitle";
import PizzaItem from "./PizzaItem/PizzaItem";
import "./cardList.scss";

function CardList({ data }) {
  return (
    <div className="pizzaItems">
      <PizzaTitle content="Всі піцци" />
      <div className="content__items">
        {data &&
          data
            .sort((a, b) => (a.cost > b.cost ? 1 : -1))
            .map(
              ({ title, url, description, status, cost, _id, type, size }) => (
                <PizzaItem
                  key={_id}
                  title={title}
                  url={url}
                  description={description}
                  status={status}
                  cost={cost}
                  type={type}
                  size={size}
                />
              )
            )}
      </div>
    </div>
  );
}

// .sort((a, b) => (a.date > b.date ? -1 : 1))
export default CardList;
