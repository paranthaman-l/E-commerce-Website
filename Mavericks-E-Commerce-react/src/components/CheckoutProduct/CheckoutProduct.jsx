import React from "react";
import { useStates } from "../../States";
import "./CheckoutProduct.css";
import { Link } from "react-router-dom";
import { RiCoupon3Line } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import DiscountIcon from '@mui/icons-material/Discount';

const CheckoutProduct = () => {
  const { cartItems, totalPrice, setCartShow, setDetail,coupon,setCoupon,ApplyCoupon } = useStates();
  return (
    <div className="left_container">
      <div className="c_box">
        <div className="check_product_details">
          <div className="product_imgs">
            <ul>
              {cartItems.map((item, i) => {
                return (
                  <li>
                    <Link to={`/product/${item.pname}`}>
                      <img
                        src={item.img}
                        alt=""
                        onClick={() => setDetail(item)}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <p>
            {cartItems.length >= 1 ? (
              <p onClick={() => setCartShow(true)}>
                If you want add or remove go to cart
              </p>
            ) : (
              <>
                <Link to="/product">
                  <HiPlus className="add_prod" />
                </Link>{" "}
                Add Product
              </>
            )}
          </p>
        </div>
        <div className="total_price">
          <h3>
            SubTotal : <p>₹ {totalPrice}</p>
          </h3>
        </div>
        <div className="coupon">
            <RiCoupon3Line className="coupon_icon" />
          <div className="coupon_box">
            <input type="text" value={coupon} placeholder="Apply Coupon" maxLength="10" onChange={(e)=>setCoupon(e.target.value)} />
            <DiscountIcon sx={{cursor:'pointer'}} onClick={ApplyCoupon(coupon)} fontSize="small" className="applyCoupon"/>
          </div>
        </div>
        <div className="total_amount">
          <p>Bill Detail : </p>
          <p>
            Sub Total<span>₹ {totalPrice}</span>{" "}
          </p>
          <p>
            Delivery Fee <span>₹ {(totalPrice * 0.03).toFixed(1)}</span>{" "}
          </p>
          <span className="line"></span>
          <p>
            GST & Other tax <span>₹ {(totalPrice * 0.04).toFixed(1)}</span>
          </p>

          <div className="t_a">
            <p className="total">
              Total Amount :{" "}
              <span>
                ₹
                {(totalPrice + totalPrice * 0.03 + totalPrice * 0.04).toFixed(
                  1
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
