import PizzaItem from "./PizzaItem/PizzaItem";
import "./cardList.scss";

function CardList({ data }) {
  return (
    <div className="content__list">
      {data &&
        data
          .sort((a, b) => (a.cost > b.cost ? 1 : -1))
          .map((object, i) => <PizzaItem key={object.id} {...object} />)}
    </div>
  );
}

export default CardList;
