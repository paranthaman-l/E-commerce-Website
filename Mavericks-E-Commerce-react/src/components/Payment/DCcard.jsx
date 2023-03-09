import React from "react";
import "./DCcard.css";
import { BiErrorCircle } from "react-icons/bi";
const DCcard = () => {
  return (
    <div className="DCcard">
      <p>Enter Debit or Credit Card</p>
      <div className="inputs_dccard">
        <div className="input_cardnumber">
          <p>Card Number</p>
          <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" maxLength={19} />
        </div>
        <div className="input_other_detail">
          <div className="exp_date">
            <p>
              Experation Date<span>(MM/yy)</span>
            </p>
            <input type="text" placeholder="MM/yy" maxLength={5} />
          </div>
          <div className="cvv_num">
            <p className="cvv_p">
              CVV
              <span>
                <BiErrorCircle />
              </span>
            </p>
            <input type="text" placeholder="742" maxLength={3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DCcard;
