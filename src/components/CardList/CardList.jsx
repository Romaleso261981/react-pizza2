import PizzaTitle from "../PizzaTitle/PizzaTitle";
import PizzaItem from "./PizzaItem/PizzaItem";
import "./cardList.scss";

function CardList({ data }) {
  console.log(data);
  return (
    <div className="pizzaItems">
      <PizzaTitle content="Всі піцци" />
      <div className="content__items">
        {data &&
          data
            .sort((a, b) => (a.cost > b.cost ? 1 : -1))
            .map(
              ({
                title,
                imageUrl,
                description,
                status,
                price,
                id,
                types,
                sizes,
              }) => (
                <PizzaItem
                  key={id}
                  title={title}
                  url={imageUrl}
                  description={description}
                  status={status}
                  price={price}
                  types={types}
                  sizes={sizes}
                />
              )
            )}
      </div>
    </div>
  );
}

// .sort((a, b) => (a.date > b.date ? -1 : 1))
export default CardList;
