import "./MainTitle.scss";

function PizzaTitle({ content }) {
  return (
    <div className="title">
      <h2 className="title__content">{content}</h2>
    </div>
  );
}

export default PizzaTitle;
