import Button from "../button/button";
import "./card.css";

const Card = (props) => {
  const { course, onAddItem, onRemoveItem } = props;
  return (
    <div className="card">
      <span className="card__badge">1</span>

      <div className="image__container">
        <img
          src={course.Image}
          alt={course.title}
          width={"100%"}
          height={"230px"}
        />
      </div>

      <div className="card__body">
        <h2 className="card__title">{course.title}</h2>
        <div className="card__price">
          {course.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>

      <div className="hr"></div>

      <div className="btn__container">
        <Button title={"+"} onClick={() => onAddItem(course)} type={"add"} />
        <Button
          title={"-"}
          onClick={() => onRemoveItem(course)}
          type={"remove"}
        />
      </div>
    </div>
  );
};

export default Card;
