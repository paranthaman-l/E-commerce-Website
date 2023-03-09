import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import {
  AiOutlineShopping,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoChevronBackSharp } from "react-icons/io5";
import { useStates } from "../../States";
import { MdDelete } from "react-icons/md";
const Cart = ({ show }) => {
  const {
    cartItems,
    totalPrice,
    OnInc,
    setDetail,
    OnDec,
    RemoveOnCart,
    setTotalPrice,
  } = useStates();
  return (
    <div className="cart_window">
      <div className="cart_box">
        <div className="cart_container">
          <div className="top">
            <button onClick={() => show(false)}>
              <IoChevronBackSharp />
            </button>
            <p>
              Your Cart <span>({cartItems.length})</span>
            </p>
          </div>
          {cartItems.length === 0 ? (
            <div className="cart_empty">
              {setTotalPrice(0)}
              <AiOutlineShopping className="bag_icon" />
              <h2>Your Shoping Cart is Empty</h2>
              <Link to="/product">
                <button
                  onClick={() => {
                    show(false);
                  }}
                  className="cart_btn"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          ) : (
            <div className="cart_items">
              {cartItems.map((item, i) => {
                return (
                  <div key={i} className="p_box">
                    <div className="cartImg">
                      <Link to={`/product/${item.pname}`}>
                        <img
                          src={item.img}
                          alt=""
                          className="cartImg"
                          onClick={function (event) {
                            setDetail(item);
                            show(false);
                          }}
                        />
                      </Link>
                    </div>
                    <div className="prod_detail">
                      <p>{item.pname}</p>
                      <p>₹{item.price * item.qty}</p>
                    </div>
                    <div className="product_qty">
                      <div className="qty">
                        <span
                          onClick={() => {
                            OnDec(item);
                          }}
                        >
                          <AiOutlineMinus className="dec" />
                        </span>
                        <span>{item.qty}</span>
                        <span
                          onClick={() => {
                            OnInc(item);
                          }}
                        >
                          <AiOutlinePlus className="inc" />
                        </span>
                      </div>
                      <div className="remove">
                        <MdDelete
                          onClick={() => RemoveOnCart(item)}
                          className="remove_icon"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="check_out">
                <p>Total Amount : ₹{totalPrice}</p>
                <Link to="/payment">
                  <button onClick={() => show(false)}>Check out</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
