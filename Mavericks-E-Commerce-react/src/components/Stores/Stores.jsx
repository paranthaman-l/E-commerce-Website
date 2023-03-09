import React from "react";
import "./Store.css";
import { storeDetails } from "../../ProjectDatabase";
import Rating from "@mui/material/Rating";
const Stores = () => {
  return (
    <div className="store_details">
      {storeDetails.map((store) => {
        return (
          <div className="single_store">
            <div className="store_image">
              <img src={store.image} alt="" />
            </div>
            <div className="single_store_details">
              <div className="store_name">
                <h2>{store.store_name}</h2>
              </div>
              <span className="store_rating">
                <Rating name="read-only" value={store.rating} readOnly />
              </span>
            </div>
            <div className="store_locations">
              <div className="store_loc">
                <h3>{store.street_name}</h3>
                <h3>{store.place}</h3>
                <h3>{store.postel_code}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stores;
