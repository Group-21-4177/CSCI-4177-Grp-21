import carWashImage1 from "./images/carwash1-unsplash.jpeg";
import "./css/VendorReview.css";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";

const VendorReview = () => {
  const [value, setValue] = useState(3);

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

          <form>
            <h5 style={{ fontSize: "18px" }}>Select Overall Rating</h5>

            {/* Reference for Star Rating, Material UI: https://mui.com/material-ui/react-rating/ */}
            <Rating
              name="simple-controlled"
              value={value}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <br></br>

            <h5>ADD A HEADING</h5>
            <input type="text" placeholder="Review Heading" />

            <h5>ADD A WRITTEN REVIEW</h5>
            <textarea placeholder="Review Description"></textarea>

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
};

export default VendorReview;
