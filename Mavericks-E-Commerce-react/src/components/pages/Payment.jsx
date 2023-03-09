import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import PaymentOption from "../PaymentOption/PaymentOption";

const Payment = () => {
  return (
    <div className="Payment_page">
      <CheckoutProduct />
      <PaymentOption />
    </div>
  );
};

export default Payment;
