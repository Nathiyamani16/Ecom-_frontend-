import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageUploadForm.css"; // Add a CSS file for styling

const ImageUploadForm = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState("400+ Rated");
  const [used, setUsed] = useState(
    "3,000 users bought this dress in past 3 weeks"
  );
  const [offerOneTitle, setOfferOneTitle] = useState("Bank Offer");
  const [offerOneDescription, setofferOneDescription] = useState(
    "Save upto ₹50 on HDFC and ICICI Bank "
  );
  const [offerTwoDescription, setofferTwoDescription] = useState(
    "Get GST Invoice upto 10% on this Product"
  );
  const [offerTwoTitle, setOfferTwoTitle] = useState("Partner Offer");

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);

    const imageUrl = URL.createObjectURL(file);
    setProfileImageUrl(imageUrl);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("rating", rating); // Include the rating in the form data
    formData.append("profileImage", profileImage);
    formData.append("rated", rated);
    formData.append("used", used);
    formData.append("originalPrice", originalPrice);
    formData.append("offerOneTitle", offerOneTitle);
    formData.append("offerOneDescription", offerOneDescription);
    formData.append("offerTwoTitle", offerTwoTitle);
    formData.append("offerTwoDescription", offerTwoDescription);

    try {
      const response = await fetch("http://localhost:5000/api/uploadd", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image and data uploaded successfully");
        // Add any additional logic or redirection here
      } else {
        console.error("Failed to upload image and data:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image and data:", error);
    }
    navigate("/");
  };

  return (
    <div className="container">
       <div className="form">
      <h1>Create a Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Add onChange handlers for other input fields */}
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Orginal Price"
          onChange={(e) => setOriginalPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter the Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />

        {profileImageUrl && (
          <img
            src={profileImageUrl}
            alt="Profile"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        )}
        <br />
        <label>
          Upload Profile Image:
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleProfileImageChange}
          />
        </label>
        <br />
        <br />
        <div className="rating-container">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star filled" : "star"}
              onClick={() => handleRatingChange(star)}
            >
              &#9733; {/* Unicode for a star */}
            </span>
          ))}
        </div>

        <br />

        <input
          type="text"
          placeholder="Rated"
          onChange={(e) => setRated(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Used"
          onChange={(e) => setUsed(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Offer One Title"
          onChange={(e) => setOfferOneTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Offer One Description"
          onChange={(e) => setofferOneDescription(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Offer Two Title"
          onChange={(e) => setOfferTwoTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Offer Two Description"
          onChange={(e) => setofferTwoDescription(e.target.value)}
        />
        <br />

        <button type="submit">Create a Product</button>
      </form>
      </div>
    </div>
  );
};

export default ImageUploadForm;
