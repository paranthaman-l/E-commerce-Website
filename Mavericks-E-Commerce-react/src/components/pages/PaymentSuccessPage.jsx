import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStates } from "../../States";
import ConfettiExplosion from "react-confetti-explosion";
import "./PaymentSuccessPage.css";
import "../CheckoutProduct/CheckoutProduct.css";
// import {totalPrice} from '../CheckoutProduct/CheckoutProduct.jsx';

const PaymentSuccessPage = () => {
  const { totalPrice, cod } = useStates();
  console.log(cod);

  const explodeProps = {
    force: 0.5,
    duration: 2500,
    particleCount: 250,
    floorHeight: 650,
    floorWidth: 1500,
  };
  const [shoot, setShoot] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShoot(!shoot);
    }, 2500);
  }, [shoot]);
  return (
    <>
      <div className="paymentSuccessfull_container">
        {shoot && <ConfettiExplosion {...explodeProps} />}
      </div>
      {cod ? (
        <>
          <div className="paymentsuccessbox">
            <div className="tickmark">
              <i className="checkmark">✔</i>
            </div>

            <div className="ps1">
              <p className="ps3">
                <b>Order placed</b>
              </p>
            </div>

            <div className="tsid">
              {/* <p className='tsid2'>Transaction ID : 155143169</p> */}
              <p className="tsid3">Estimated Delivary : 2 hrs</p>
            </div>

            <div className="finalta">
              <p className="finaltotal2">
                <b>
                  Bill Amount :{" "}
                  <span>
                    {" "}
                    ₹
                    {(
                      totalPrice +
                      totalPrice * 0.03 +
                      totalPrice * 0.04
                    ).toFixed(1)}
                  </span>
                </b>
              </p>
              <p className="bankname2">
                <b>Status : Product Dispatched</b>
              </p>
            </div>
          </div>

          <div className="backtohome">
            <Link to="/product">
              <img
                src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1672895465/back_lmaeu9.png"
                alt="back"
                className="back2home"
              ></img>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="paymentsuccessbox">
            <div className="tickmark">
              <i className="checkmark">✔</i>
            </div>

            <div className="ps1">
              <p className="ps2">
                <b>Payment Successful</b>
              </p>
            </div>

            <div className="tsid">
              <p className="tsid2">
                Transaction ID : <span>155143159</span>
              </p>
            </div>

            <div className="finalta">
              <p className="finaltotal">
                <b>
                  Amount Paid :{" "}
                  <span>
                    {" "}
                    ₹
                    {(
                      totalPrice +
                      totalPrice * 0.03 +
                      totalPrice * 0.04
                    ).toFixed(1)}
                  </span>
                </b>
              </p>
              <p className="bankname">
                <b>
                  Bank Name : <span>Bank of India</span>
                </b>
              </p>
            </div>
          </div>

          <div className="backtohome">
            <Link to="/product">
              <img
                src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1672895465/back_lmaeu9.png"
                alt="back"
                className="back2home"
              ></img>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentSuccessPage;
