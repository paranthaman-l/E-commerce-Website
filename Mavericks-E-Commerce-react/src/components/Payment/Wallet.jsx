import React, { useState } from "react";
import { FaAmazonPay, FaPaypal, FaGooglePay } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import "./Wallet.css";
const Wallet = () => {
  const [toggleWallet, setToggleWallet] = useState(0);
  return (
    <div className="Wallet1">
      <ul>
        <li
          onClick={() => {
            setToggleWallet(1);
          }}
          className={toggleWallet === 1 ? "pay-activ" : "pay"}
        >
          <FaGooglePay />
          Google Pay
        </li>
        <li
          onClick={() => {
            setToggleWallet(2);
          }}
          className={toggleWallet === 2 ? "pay-activ" : "pay"}
        >
          <SiPhonepe />
          PhonePe
        </li>
        <li
          onClick={() => {
            setToggleWallet(3);
          }}
          className={toggleWallet === 3 ? "pay-activ" : "pay"}
        >
          <SiPaytm />
          Paytm
        </li>
        <li
          onClick={() => {
            setToggleWallet(4);
          }}
          className={toggleWallet === 4 ? "pay-activ" : "pay"}
        >
          <FaAmazonPay />
          Amazon Pay
        </li>
        <li
          onClick={() => {
            setToggleWallet(5);
          }}
          className={toggleWallet === 5 ? "pay-activ" : "pay"}
        >
          <FaPaypal />
          PayPal
        </li>
      </ul>
    </div>
  );
};
export default Wallet;
