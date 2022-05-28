import { useEffect, useRef } from "react";
import firstImage from "../../assets/backstagetalks_cover_issue_5.webp";
import firstImageFallback from "../../assets/fallback_pics/backstagetalks_cover_issue_5.png";
import secondImage from "../../assets/backstagetalks_cover_issue_4.webp";
import secondImageFallback from "../../assets/fallback_pics/backstagetalks_cover_issue_4.png";
import thirdImage from "../../assets/backstagetalks_cover_issue_3.webp";
import thirdImageFallback from "../../assets/fallback_pics/backstagetalks_cover_issue_3.png";
import fourthImage from "../../assets/backstagetalks_cover2017.webp";
import fourthImageFallback from "../../assets/fallback_pics/backstagetalks_cover2017.png";
import fifthImage from "../../assets/backstagetalks_cover2016_n.webp";
import fifthImageFallback from "../../assets/fallback_pics/backstagetalks_cover2016_n.png";

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
        fallbackImage={firstImageFallback}
        active_button={true}
        title="Issue #5"
        otherText="or in "
        hexCode="#00c1b5"
        otherRef={props.otherRef}
        id="issue5"
        active={props.active}
        parentRef={bookListRef}
      />
      <BookCard
        image={secondImage}
        fallbackImage={secondImageFallback}
        active_button={true}
        title="Issue #4"
        otherText="or in "
        hexCode="#ff651a"
        otherRef={props.otherRef}
        id="issue4"
        active={props.active}
        parentRef={bookListRef}
      />
      <BookCard
        image={thirdImage}
        fallbackImage = {thirdImageFallback}
        active_button={true}
        title="Issue #3"
        otherText="or in "
        hexCode="#ffbe00"
        otherRef={props.otherRef}
        id="issue3"
        active={props.active}
        parentRef={bookListRef}
      />
      <BookCard
        image={fourthImage}
        fallbackImage = {fourthImageFallback}
        active_button={true}
        title="Issue #2"
        otherText="or in "
        hexCode="#1d3fbb"
        otherRef={props.otherRef}
        id="issue2"
        active={props.active}
        parentRef={bookListRef}
      />
      <BookCard
        image={fifthImage}
        fallbackImage = {fifthImageFallback}
        active_button={false}
        title="Issue #1"
        otherText="If you are lucky, you may get the last pieces in "
        hexCode="#e30512"
        otherRef={props.otherRef}
        id="issue1"
        active={props.active}
        parentRef={bookListRef}
      />
      <Intro />
    </section>
  );
};

export default BookList;
