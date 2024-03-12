import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import StarRating from "./StarRating";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCash } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";



const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/makeup-products/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Failed to fetch product:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id, 
          image: product.imageData, 
          price: product.price,
          quantity,
          description: product.description,
          title: product.title,
        }),
      });
  
      if (response.ok) {
        toast.success(`${product.title} has been added to your cart!`, {
          position: "bottom-right",
          autoClose: 5000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        const errorData = await response.json();
        console.error("Failed to add product to cart:", errorData);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="image-container">
        <br />
        <img
          src={`http://localhost:5000/uploads/${product.imageData}`}
          alt={product.title}
          style={{ maxWidth: "400px" }}
        />
      </div>
      <br />
      <div className="content-container">
        <br />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="price-container">
          <p className="search-price">&#8377; {product.price}</p>
          &nbsp; Orginal Price &nbsp;
          {product.originalPrice && (
            <del className="original-price">&#8377;{product.originalPrice}</del>
          )}
        </div>
        <p>
          <StarRating rating={product.rating} />
          {product.rated}
        </p>
        <p>{product.used}</p>

        <div className="break-line"></div>

        <div>
          <h3>Offers for {product.title}</h3>
          <div className="OfferCard">
            <h3>{product.offerOneTitle}</h3>
            <p>{product.offerOneDescription}</p>
          </div>
          <div className="OfferCard">
            <h3>{product.offerTwoTitle}</h3>
            <p>{product.offerTwoDescription}</p>
          </div>
        </div>

        <div className="break-line"></div>
        <br />

        <div className="LogosCenter">
          <div className="OfferCard">
          <CiDeliveryTruck className="LogoCenterIcon"/>
          <p className="LogoCenterP">Free Delivery </p>
          </div>


          <div className="OfferCard">
          <BsCash className="LogoCenterIcon" />
          <p className="LogoCenterP">Cash on Delivery </p>
          </div>

          <div className="OfferCard">
          <MdOutlineSecurity className="LogoCenterIcon" />
          <p className="LogoCenterP">Secure Transaction </p>
          </div>

        </div>
        <br />
        <div className="break-line"></div>
        <br />
        <h3>Add this {product.title} in your Cart </h3>
        <p>Amount: &#8377;{quantity * product.price}</p>
        <div className="quantity-container">
          <button onClick={handleDecreaseQuantity} className="MinusButton">
            -
          </button>
          <span className="Quality">{quantity}</span>
          <button onClick={handleIncreaseQuantity} className="PlusButton">
            +
          </button>
        </div>
        <br />
        <button onClick={handleAddToCart} className="AddButton">
          Add to Cart
        </button>
        <br />
        <br />
        <br />
        <br />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
