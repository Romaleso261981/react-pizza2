
import PizzaItem from "./PizzaItem/PizzaItem";
import "./cardList.scss";

function CardList({ data }) {
  return (
    <div className="pizzaItems">
      
      <div className="content__items">
        {data &&
          data
            .sort((a, b) => (a.cost > b.cost ? 1 : -1))
            .map((object, i) => <PizzaItem key={object.id} {...object} />)}
      </div>
    </div>
  );
}

export default CardList;
