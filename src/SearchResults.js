import React, { useEffect, useState } from "react";
import { useLocation, Link , useNavigate} from "react-router-dom";
import StarRating from "./Dashboard/StarRating";
import "./SearchResults.css"; // Add your own CSS for styling

const SearchResults = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/search-results?query=${query}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          console.error("Failed to fetch search results:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="search-results-container" onClick={() => window.scrollTo(0, 0)}>
      {searchResults.map((result) => (
        <div
          key={result._id}
          className="search-product-card"
          onClick={() => handleCardClick(result._id)}
        >
          <div className="search-card-image">
            <img
              src={`http://localhost:5000/uploads/${result.imageData}`}
              alt={result.title}
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>
          <div className="search-card-details">
            <h3 className="search-hthree">{result.title}</h3>
            <p className="search-p">{result.description}</p>

            <div className="price-container">
            <p className="search-price">&#8377; {result.price}</p>
            &nbsp; 
            Orginal Price &nbsp;
              {result.originalPrice && (
                <del className="original-price">&#8377;{result.originalPrice}</del>
              )}
              </div>

            <StarRating rating={result.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
