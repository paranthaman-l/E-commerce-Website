  import React,{useEffect} from "react";
import "./Products.css";
import { AiTwotoneStar } from "react-icons/ai";
import { useStates } from "../../States";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { motion } from "framer-motion";
const Product = () => {
  const {
    AddtoCart,
    setDetail,
    setReviews,
    arrayToFilter,
    setFilterChoice,
  } = useStates();
  // useEffect(() => {
  //   setFilterChoice("All");
  // }, [])
  
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
      {arrayToFilter.length===0 ? (
        <div className="empty_product">
        <img
          src="https://res.cloudinary.com/do4m8xtim/image/upload/v1674918197/no_result_still_2x_opeqze.webp"
          alt=""
        />
      </div>
        
      ) : (
        <motion.div className="products">
          
          {arrayToFilter.map((product, i) => {
            return (
              <motion.div layout key={i} className="box">
                <Link to={`/product/${product.pname}`}>
                  <img
                    layout
                    src={product.img}
                    alt=""
                    onClick={function (e) {
                      setDetail(product);
                      setReviews(product.reviews);
                    }}
                  />
                </Link>
                <div className="product_detail">
                  <p>{product.pname}</p>
                </div>
                <div className="rating">
                  <h4 className="rate">
                    <p>₹{product.price}</p>
                    <span>
                      {product.rating}
                      <AiTwotoneStar className="star" />
                    </span>
                  </h4>
                </div>
                <div className="box_btn">
                  <div className="buy_btn_container">
                    <Link to="/payment">
                      <button
                        onClick={() => AddtoCart(product)}
                        className="buy_btn"
                      >
                        Buy Now
                      </button>
                    </Link>
                  </div>
                  <div className="add_cart_container">
                    <button
                      onClick={() => AddtoCart(product)}
                      className="add_cart"
                    >
                      Add to Cart
                    </button>
                    <span className="wishlist_container">
                      <Checkbox
                        size="small"
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={
                          <Favorite
                            sx={{
                              color: pink[600],
                              "&.Mui-checked": { color: pink[600] },
                            }}
                          />
                        }
                      />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default Product;
