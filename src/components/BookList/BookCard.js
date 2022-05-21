import React from "react";
import './BookCard.css'


const BookCard = (props) => {
  const showButton = props.active_button ? (
    <button className="buy_btn">BUY HERE</button>
  ) : (
    ""
  );
  return (
    <article className="container">
      <img className="image" src={props.image} alt="A blue book" />

      <section className="sub_container">
       <h1 className="title">{props.title}</h1>
       {showButton}
       <p className="text">{props.otherText}<span className="selected__text">selected stores</span>.</p>
      </section>
    </article>
  );
};


export default BookCard;