import React, { useEffect, useRef } from "react";
import "./BookCard.css";

const BookCard = (props) => {
  const elem = useRef();
  const rootElem = document.querySelector(".book__list");

  // debouncing intersection observer api
  let book_timeout;
  const func = ([entry]) => {
    clearTimeout(book_timeout);

    book_timeout = setTimeout(() => {
      if (entry.isIntersecting) {
        props.otherRef.current.style.backgroundColor = props.hexCode;
        document.body.style.backgroundColor = props.hexCode;
        document.body.style.transition = "0.7s background-Color ease";
        props.otherRef.current.style.transition = "0.7s background-Color ease";
        document.querySelectorAll(".issueTab").forEach(el => el.style.fontWeight = '');
        document.getElementById(entry.target.id).style.fontWeight = 'bold'
        
      }
    }, 50);
  };
  
  useEffect(() => {
    const elemObj = {
      root: rootElem,
      rootMargin: "",
      threshold: 0.5,
    };
    
    const elemObserver = new IntersectionObserver(func, elemObj);
    
    elemObserver.observe(elem.current);
    
    //issues
    if (props.active === props.id) {
      console.dir(props.active);
      console.log(document.querySelectorAll('.issueTab'));
      

      const rect = elem.current;
      console.log(rect);
      props.parentRef.current.scrollTo({
        top: rect.offsetTop,
        behavior: "smooth",
      });
    }
  });

  const showButton = props.active_button ? (
    <button className="buy_btn">BUY HERE</button>
  ) : (
    ""
  );
  return (
    <article className="container" ref={elem} id={props.id}>
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
