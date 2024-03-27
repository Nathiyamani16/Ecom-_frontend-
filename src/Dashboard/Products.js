import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Products.css";
import Filter from "./Filter";
import StarRating from "./StarRating";

const MakeupProducts = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [filters, setFilters] = useState({
    mens: false,
    womens: false,
    priceRange: null,
    search: "",
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const filterParams = new URLSearchParams(filters);
        console.log("Fetching with filters:", filterParams.toString());
        const response = await fetch(
          `http://localhost:5000/api/makeup-products?${filterParams}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched makeup products:", data);
          setImages(data);
        } else {
          console.error("Failed to fetch images:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div className="page-container">
        <Filter handleFilterChange={handleFilterChange} />
        <div className="cardd-container" onClick={() => window.scrollTo(0, 0)}>
          {images.length === 0 ? (
            <p>No makeup products found.</p>
          ) : (
            images.map((image) => (
              <Link
                key={image._id}
                to={`/product/${image._id}`}
                className="cardd"
                style={{ cursor: "pointer" }}
              >
                <div className="cardd-image">
                  <img
                    src={`http://localhost:5000/uploads/${image.imageData}`}
                    alt={image.title}
                    className="imagee"
                  />
                </div>
                <div className="cardd-content">
                  <h2 className="CardTitle">{image.title}</h2>

                  <div className="price-container">
                    <p className="search-price">&#8377; {image.price}</p>
                    &nbsp; Orginal Price &nbsp;
                    {image.originalPrice && (
                      <del className="original-price">
                        {image.originalPrice}
                      </del>
                    )}
                  </div>

                  <p className="Ratingss">
                    <StarRating rating={image.rating} />
                    {image.rated}{" "}
                  </p>
                  <p className="rated"></p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MakeupProducts;
