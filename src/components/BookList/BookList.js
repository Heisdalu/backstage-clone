import React, { useEffect, useRef, useState } from "react";
import firstImage from "../../assets/backstagetalks_cover_issue_5.webp";
import secondImage from "../../assets/backstagetalks_cover_issue_4.webp";
import thirdmage from "../../assets/backstagetalks_cover_issue_3.webp";
import fourthImage from "../../assets/backstagetalks_cover2017.webp";
import fifthImage from "../../assets/backstagetalks_cover2016_n.webp";

import BookCard from "./BookCard";
import Intro from "../AboutUs/Intro";
import "./BookList.css";

const BookList = () => {
  const bookRef = useRef();
  const [val, setVal] = useState("");

  useState();

  let timeout;

  const scrollHandler = () => {
    clearInterval(timeout);

    if (!bookRef?.current) return;
    timeout = setTimeout(
      () => setVal(bookRef.current.getBoundingClientRect()),
      50
    );
  };

  useEffect(() => {
    console.log(bookRef.current);
    bookRef.current.focus();
  })


  return (
    <section className="book__list" onScroll={scrollHandler} ref={bookRef}>
      <BookCard
        image={firstImage}
        active_button={true}
        title="Issue #5"
        otherText="or in "
        point={val}
        hexCode="#00c1b5"
      />
      <BookCard
        image={secondImage}
        active_button={true}
        title="Issue #4"
        otherText="or in "
        point={val}
        hexCode="#ff651a"
      />
      <BookCard
        image={thirdmage}
        active_button={true}
        title="Issue #3"
        otherText="or in "
        point={val}
        hexCode="#ffbe00"
      />
      <BookCard
        image={fourthImage}
        active_button={true}
        title="Issue #2"
        otherText="or in "
        point={val}
        hexCode="#1d3fbb"
      />
      <BookCard
        image={fifthImage}
        active_button={false}
        title="Issue #1"
        otherText="If you are lucky, you may get the last pieces in "
        point={val}
        hexCode="#e30512"
      />
      <Intro />
    </section>
  );
};

export default BookList;
