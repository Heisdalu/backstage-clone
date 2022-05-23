import { useEffect, useRef } from "react";
import firstImage from "../../assets/backstagetalks_cover_issue_5.webp";
import secondImage from "../../assets/backstagetalks_cover_issue_4.webp";
import thirdmage from "../../assets/backstagetalks_cover_issue_3.webp";
import fourthImage from "../../assets/backstagetalks_cover2017.webp";
import fifthImage from "../../assets/backstagetalks_cover2016_n.webp";

import BookCard from "./BookCard";
import Intro from "../AboutUs/Intro";
import "./BookList.css";

const BookList = (props) => {

  const bookListRef = useRef();
  useEffect(() => {
    bookListRef.current.focus();
  });

  return (
    <section className="book__list" tabIndex={2} ref={bookListRef}>
      <BookCard
        image={firstImage}
        active_button={true}
        title="Issue #5"
        otherText="or in "
        hexCode="#00c1b5"
        otherRef={props.otherRef}
      />
      <BookCard
        image={secondImage}
        active_button={true}
        title="Issue #4"
        otherText="or in "
        hexCode="#ff651a"
        otherRef={props.otherRef}
      />
      <BookCard
        image={thirdmage}
        active_button={true}
        title="Issue #3"
        otherText="or in "
        hexCode="#ffbe00"
        otherRef={props.otherRef}
      />
      <BookCard
        image={fourthImage}
        active_button={true}
        title="Issue #2"
        otherText="or in "
        hexCode="#1d3fbb"
        otherRef={props.otherRef}
      />
      <BookCard
        image={fifthImage}
        active_button={false}
        title="Issue #1"
        otherText="If you are lucky, you may get the last pieces in "
        hexCode="#e30512"
        otherRef={props.otherRef}
      />
      <Intro />
    </section>
  );
};

export default BookList;
