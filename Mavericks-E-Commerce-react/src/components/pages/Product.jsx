import React from "react";
import Filter from "../Filter/Filter";
import { useStates } from "../../States";
import { BsFilterLeft } from "react-icons/bs";
import ProductDetails from "../Products/Products";
const Product = () => {
  const { filterShow, setFilterShow } = useStates();
  const toggle = () => {
    filterShow ? setFilterShow(false) : setFilterShow(true);
  };
  return (
    <div>
      <span className="filter_icon_container" onClick={toggle}>
        <BsFilterLeft className="filter_icon" />
      </span>
      {filterShow && <Filter />}
      <ProductDetails />
    </div>
  );
};

export default Product;
