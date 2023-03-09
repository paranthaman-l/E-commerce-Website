import React, { useState } from "react";
import "./details.css";
import { useStates } from "../../States";
import Rating from "@mui/material/Rating";
import { products } from "../../ProjectDatabase";
import { Link } from "react-router-dom";
import Review from "../Review/Review";
import { IoSend } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
function Details() {
  const {
    detail,
    setDetail,
    user,
    setGivenRating,
    review,
    setreview,
    setreviews,
    addreview,
    AddtoCart,
    setFilterChoice,
  } = useStates();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="total_display">
        <div className="imagedisplay">
          <img id="imagedis" src={detail.img} alt="" />
          {/* <span id="hide">
            <b>{detail.pname}</b>
          </span> */}
        </div>
        <div className="masterdetails">
          <div className="productname">
            <span id="prodname">
              <b>
                {detail.pname} {detail.description} 
                <br></br> 
                {detail.des2}
              </b>
            </span>
          </div>

          <div className="productstore">
            <span id="prodstore">
              <b>Visit the product store</b>
            </span>
          </div>

          <div className="productstars">
            <p id="prodstars">
              <Rating
                name="small-size"
                precision={0.5}
                defaultValue={detail.rating}
                size="small"
                readOnly
              />
            </p>
            <span id="noofreviews">145 reviews</span>
          </div>

          <div className="linebreak1">
            <span id="hr1">
              .............................................................................
            </span>
            <span id="hr2">
              ............................................................
            </span>
            <span id="hr3">.............................................</span>
          </div>

          <div className="productmrp">
            <div>
              <span id="strikedmrp">
                <b>
                  M.R.P.:{" "}
                  <span id="tostrike">
                    ₹{detail.price + detail.price * 0.1}
                  </span>
                </b>
              </span>
              <span id="actualmrp">
                <b>Price: ₹{detail.price} </b>
              </span>
              <span id="savedmrp">
                <b>
                  You save: ₹
                  {(detail.price + detail.price * 0.1 - detail.price).toFixed(
                    2
                  )}
                  (10%)
                </b>
              </span>
              <span id="taxline">
                <b>Inclusive of all taxes</b>
              </span>
            </div>
          </div>

          <div className="productoffers">
            <span id="otheroffers">
              <b>Save Extra</b>
            </span>
            <span id="otheroffers2">
              <b>with 2 offers</b>
            </span>
            <hr id="divider1"></hr>
            <span id="bankoffers">
              <b>Bank offers(2): </b>
            </span>
            <span id="bankoffers2">
              <b>10% Instant discount up tp INR 300 on a purchase upto......</b>
            </span>
            <span id="blue1">
              <b>See more</b>
            </span>
            <hr id="divider2"></hr>
            <span id="partneroffers">
              <b>Partneroffers: </b>
            </span>
            <span id="partneroffers2">
              <b>Get GST invoice and save upto 20% on......</b>
            </span>
            <span id="blue2">
              <b>See more</b>
            </span>
          </div>
          <div className="detail_buybtns">
            <button onClick={() => AddtoCart(detail)} className="add2cart">
              Add to Cart
            </button>
            <Link to="/payment">
              <button className="buy2now" onClick={() => AddtoCart(detail)}>
                Buy Now
              </button>
            </Link>
            <div className="backtohome">
            <Link to="/product">
              <img
                src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1672895465/back_lmaeu9.png"
                alt="back"
                className="back2home"
                onClick={function (event) {
                  setFilterChoice("All");}}
              ></img>
            </Link>
          </div>

          </div>

          {/* <div className="details">
                <span id="proddetails">Boost Drinks Limited is a British drinks company that sells primarily energy and sports drinks through convenience stores, independent retail chains and petrol forecourts. It was established in 2001 and is headquartered in Leeds.</span>
            </div> */}
          <div className="similarproducts">
            <h2>Similar Products</h2>
            {products
              .filter((product) => {
                return detail.category === product.category &&
                  detail.pname !== product.pname
                  ? product
                  : "";
              })
              .map((product, i) => {
                return (
                  <>
                    <div className="similarProductBox">
                      <div className="similarProductImage">
                        <Link to={`/product/${product.pname}`}>
                          <img
                            onClick={function (e) {
                              setDetail(product);
                              setreviews(product.reviews);
                            }}
                            src={product.img}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="similarProductDetail">
                        <div className="h3">
                          {product.pname} <span>₹{product.price}</span>
                        </div>
                        <div className="ratingInSimilarProducts">
                          <Rating
                            name="small-size"
                            precision={0.5}
                            defaultValue={product.rating}
                            size="small"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <div className="give_rating">
        {user && (
          <form
            onSubmit={(e) => e.preventDefault()}
            // className="flex w-[800px] pt-4 items-start"
          >
            <img
              src={user?.photoURL}
              alt="profile"
              // className="rounded-full mr-3 h-12 w-12"
            />
            <Rating
              name="large"
              onChange={(e) => setGivenRating(e.target.value)}
              size="large"
            />
            <input
              value={review}
              onChange={(e) => setreview(e.target.value)}
              type="text"
              placeholder="Add a review..."
              required
              // className="bg-[transparent] border-b border-b-yt-light-black outline-none text-sm p-1 w-full"
            />
            <IoSend onClick={addreview} className="add_review" />
          </form>
        )}
      </div>
      <Review product={detail} />
    </>
  );
}

export default Details;
