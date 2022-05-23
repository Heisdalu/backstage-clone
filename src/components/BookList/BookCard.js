import React, { useEffect, useRef } from "react";
import "./BookCard.css";

const BookCard = (props) => {
  const elem = useRef();
  const lol = document.querySelector(".book__list");

  // debouncing intersection observer api
  let book_timeout;
  const func = ([entry]) => {
    clearTimeout(book_timeout);
    
    book_timeout = setTimeout(() => {
      // console.log(entry.isIntersecting, props.title);
      
      if (entry.isIntersecting) {

        props.otherRef.current.style.backgroundColor = props.hexCode;
        document.body.style.backgroundColor = props.hexCode;
        document.body.style.transition = "0.7s background-Color ease";
        props.otherRef.current.style.transition =
          "0.7s background-Color ease";
      }
    }, 100);
  };

  useEffect(() => {
    const elemObj = {
      root: lol,
      rootMargin: "",
      threshold: 0.5,
    };

    const elemObserver = new IntersectionObserver(func, elemObj);

    elemObserver.observe(elem.current);
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
