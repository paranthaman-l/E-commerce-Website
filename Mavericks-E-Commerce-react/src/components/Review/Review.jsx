import React from "react";
import "./Review.css";
import Rating from "@mui/material/Rating";
const Review = (props) => {
  // const products1 = JSON.parse(localStorage.getItem("products"));
  // const reviews = products1.filter((item) => {
  //   return item.pname === props.product.pname;
  // });
  // console.log(reviews);
  console.log(props.product.reviews);
  return (
    <div className="Review_container">
      {props.product.reviews.map((review) => {
        return (
          <>
            <div className="single_review">
              <img src={review.image} alt="profile" />
              <div className="single_review_detail">
                <h4>{review.name}</h4>
                <p className="">
                  {/* {(review.uploaded)} */}
                  <Rating
                    name="small-size"
                    value={review.rating}
                    size="small"
                    readOnly
                  />
                </p>
                <p className="review_text">{review.review}</p>
              </div>
            </div>
            {/* <hr /> */}
          </>
        );
      })}
    </div>
  );
};

export default Review;
