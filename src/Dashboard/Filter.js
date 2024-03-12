// import React, {useState} from "react";
// import "./Filters.css"
// import StarRating from "./StarRating";

// const Filter = ({ handleFilterChange }) => {
//   const [selectedRatings, setSelectedRatings] = useState({
//     '5': 5,
//     '4': 4,
//     '3': 3,
//     '2': 2,
//     '1': 1,
//   });

//   const handleRatingChange = (rating) => {
//     setSelectedRatings({
//       '5': rating === 5 ,
//       '4': rating === 4 ,
//       '3': rating === 3 ,
//       '2': rating === 2 ,
//       '1': rating === 1,
//     });
//   };

//   return (
//     <div className="filter-container">
//       <h2>Delivery Day</h2>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("mens")} />
//         <label>Get it by Tommorow</label>
//       </div>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("womens")} />
//         <label>Get it in Two Days</label>
//       </div>
//       <h2>Brand</h2>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("puma")} />
//         <label>Puma</label>
//       </div>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("rebook")} />
//         <label>Rebook</label>
//       </div>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("adidas")} />
//         <label>Adidas</label>
//       </div>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("miniso")} />
//         <label>Miniso</label>
//       </div>
//       <h2>Price</h2>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("10k")} />
//         <label>10$ - 100$</label>
//       </div>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("100k")} />
//         <label>100$ - 200$</label>
//       </div>
//       <div>
//       <input type="checkbox" onChange={() => handleFilterChange("200k")} />
//         <label>Above 200$</label>
//       </div>
//       <h2>Rating</h2>
//       <div>
//         <button className="ButtonRatings">
//         <StarRating rating={5} />
//         </button>
//         <br />
//         <button className="ButtonRatings">
//         <StarRating rating={4} />
//         </button>
//         <br />
//         <button className="ButtonRatings">
//         <StarRating rating={3} />
//         </button>
//         <br />
//         <button className="ButtonRatings">
//         <StarRating rating={2} />
//         </button>
//         <br />
//         <button className="ButtonRatings">
//         <StarRating rating={1} />
//         </button>
//       </div>
//       <br />
//       <button className="FilterButton">Apply Filters</button>
//     </div>
//   );
// };

// export default Filter;



import React, { useState } from "react";
import "./Filters.css";
import StarRating from "./StarRating";

const Filter = ({ handleFilterChange }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleFilterApply = () => {
    // You can use the selectedRating state to pass the selected rating to the filter function.
    handleFilterChange("rating", selectedRating);
  };

  return (
    <div className="filter-container">
      <h2>Delivery Day</h2>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("mens")} />
        <label>Free Delivery</label>
      </div>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("womens")} />
        <label>Get it by Tommorrow</label>
      </div>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("mns")} />
        <label>Get it in Two Days</label>
      </div>
      
      <h2>Brand</h2>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("puma")} />
        <label>Puma</label>
      </div>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("rebook")} />
        <label>Rebook</label>
      </div>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("adidas")} />
        <label>Adidas</label>
      </div>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("miniso")} />
        <label>Miniso</label>
      </div>
      <h2>Price</h2>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("10k")} />
        <label>10$ - 100$</label>
      </div>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("100k")} />
        <label>100$ - 200$</label>
      </div>
      <div>
        <input type="checkbox" onChange={() => handleFilterChange("200k")} />
        <label>Above 200$</label>
      </div>
      <h2>Rating</h2>
      <div>
        <button className="ButtonRatings" onClick={() => handleRatingChange(5)}>
          <StarRating rating={5} />
        </button>
        <br />
        <button className="ButtonRatings" onClick={() => handleRatingChange(4)}>
          <StarRating rating={4} />
        </button>
        <br />
        <button className="ButtonRatings" onClick={() => handleRatingChange(3)}>
          <StarRating rating={3} />
        </button>
        <br />
        <button className="ButtonRatings" onClick={() => handleRatingChange(2)}>
          <StarRating rating={2} />
        </button>
        <br />
        <button className="ButtonRatings" onClick={() => handleRatingChange(1)}>
          <StarRating rating={1} />
        </button>
      </div>
      <p>Selected Rating: {selectedRating > 0 ? `${selectedRating} Star` : "None"}</p>
      <br />
      <button className="FilterButton" onClick={handleFilterApply}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
