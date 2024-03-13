import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Profile.css"; // Assuming you have a CSS file for styling

const Profile = () => {
  const { email } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    console.log("Fetching user profile for email:", email);
    if (email) {
      axios.get(`http://localhost:5000/api/profile/${email}`)
        .then((response) => {
          console.log("User profile fetched successfully:", response.data);
          setProfile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [email]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
        <div className="ProfileCard" >
      <h2 >User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Number:</strong> {profile.number}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>
    </div>
    </div>
  );
};

export default Profile;
