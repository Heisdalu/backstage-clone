import React, { useEffect, useRef} from "react";
import "./BookCard.css";

const BookCard = (props) => {
  const elem = useRef();

  useEffect(() => {
    if (!props.point) return;
    const dert = elem.current.getBoundingClientRect().y === props.point.y
    if(dert) {
      document.body.style.backgroundColor = props.hexCode;
      document.body.style.transition = "0.5s background-Color ease";
    }
  });

  const showButton = props.active_button ? (
    <button className="buy_btn">BUY HERE</button>
  ) : (
    ""
  );
  return (
    <article className="container" ref={elem}>
      <img className="image" src={props.image} alt="A blue book" />

      <section className="sub_container">
        <h1 className="title">{props.title}</h1>
        {showButton}
        <p className="text">
          {props.otherText}
          <span className="selected__text">selected stores</span>.
        </p>
      </section>
    </article>
  );
};

export default BookCard;
