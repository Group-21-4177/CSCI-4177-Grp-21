import carWashImage1 from "./images/carwash1-unsplash.jpeg";
import "./css/VendorReview.css";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import axios from "axios";

function VendorReview() {
  const [ratingValue, setRatingValue] = useState(3);
  const [reviewHeading, setReviewHeading] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const vendorId = 3;

  const handleHeadingChange = (event) => {
    setReviewHeading(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setReviewDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Heading:", reviewHeading);
    console.log("Description:", reviewDescription);
    console.log("Rating:", ratingValue);

    const newReview = {
      vendor_id: vendorId,
      rating: ratingValue,
      heading: reviewHeading,
      description: reviewDescription,
    };
    axios
      .post("https://csci-4177-grp-21.onrender.com/addReview", newReview)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="vendor-review-page">
      <div className="vendor-review-grid">
        <div className="vendor-review-page-form">
          <div className="vendor-review-page-form-heading">
            Shimmer 'n' Shine Auto Spa
          </div>
          <h5 style={{ fontSize: "18px" }}>
            123 Main Street Halifax, NS B3H 1A1 Canada
          </h5>

          <hr className="vendor-review-line"></hr>

          <form onSubmit={handleSubmit}>
            <h5 style={{ fontSize: "18px" }}>Select Overall Rating</h5>

            {/* Reference for Star Rating, Material UI: https://mui.com/material-ui/react-rating/ */}
            <Rating
              name="simple-controlled"
              value={ratingValue}
              size="large"
              onChange={(event, newRatingValue) => {
                setRatingValue(newRatingValue);
              }}
            />

            <br></br>

            <h5>ADD A HEADING</h5>
            <input
              type="text"
              placeholder="Review Heading"
              value={reviewHeading}
              onChange={handleHeadingChange}
            />

            <h5>ADD A WRITTEN REVIEW</h5>
            <textarea
              placeholder="Review Description"
              value={reviewDescription}
              onChange={handleDescriptionChange}
            ></textarea>

            <button type="submit">Add Review</button>
          </form>
        </div>

        <div className="vendor-review-page-image">
          <img
            src={carWashImage1}
            alt="black car getting washed"
            className="car-wash-image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default VendorReview;
