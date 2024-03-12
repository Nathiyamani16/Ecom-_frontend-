// StarRating.js
import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= rating ? "star filled" : "star"}
      >
        &#9733; {/* Unicode for a star */}
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
