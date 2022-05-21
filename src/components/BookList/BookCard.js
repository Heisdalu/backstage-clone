import React from "react";
import firstImage from "../../assets/backstagetalks_cover_issue_3.webp";
import './BookCard.css'


const BookCard = () => {
  return (
    <article className="container">
      <img className="image" src={firstImage} alt="A blue book" />
    </article>
  );
};


export default BookCard;