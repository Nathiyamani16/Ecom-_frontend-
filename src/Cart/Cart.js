import React, { useState, useEffect } from "react";
import "./Cart.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cart");
        if (response.ok) {
          const cartData = await response.json();
          setCartItems(cartData);
        } else {
          console.error("Failed to fetch cart data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted item from the state
        setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item._id !== itemId)
        );
        toast.success("Product deleted successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

      } else {
        console.error("Failed to delete item from cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-product-card">
              <div className="cart-card-image">
                <img
                  src={`http://localhost:5000/uploads/${item.image}`}
                  alt={item.title}
                  className="cart-card-image"
                />
              </div>
              <div className="cart-card-details">
                <h3 className="cart-hthree">{item.title}</h3>
                <p className="cart-p">{item.description}</p>
                <p className="cart-p">Price: &#8377;{item.price}</p>
                <p className="cart-p">Quantity: {item.quantity}</p>
                <p className="cart-p">Total Price: &#8377;{item.quantity * item.price}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteItem(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
