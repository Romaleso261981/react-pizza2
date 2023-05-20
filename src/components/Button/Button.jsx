import "./button.scss";

function Button({Children}) {
  return (
    <div className="button__container">
      <div className="button__chidren" >{Children}</div>
    </div>
  );
}
export default Button;
