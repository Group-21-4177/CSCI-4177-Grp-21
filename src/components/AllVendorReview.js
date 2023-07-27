import Rating from "@mui/material/Rating";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllVendorReview.css";

function AllVendorReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // TODO: remove, and get once vendor page is implemented
    const vendor_id = 1;

    axios
      .get(`https://csci-4177-grp-21.onrender.com/review?id=${vendor_id}`)
      .then((response) => {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error getting reviews:", error);
      });
  }, []);

  return (
    <div className="all-vendor-review-page">
      <div className="all-vendor-review-page-form-heading">
        All Customer Reviews
      </div>

      <div className="review-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-comp">
            <h3>{review.heading}</h3>
            <div className="ind-rating-star ">
              <Rating name="read-only" value={review.rating} readOnly />
            </div>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllVendorReview;
