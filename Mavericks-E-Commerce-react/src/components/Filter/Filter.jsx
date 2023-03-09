import React from "react";
import "./Filter.css";
import { GrDown } from "react-icons/gr";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useStates } from "../../States";
import { filtersArray } from "../../ProjectDatabase";
// import Rating from "@mui/material/Rating";

const Filter = () => {
  const { setFilterShow, setFilterChoice, filterChoice } = useStates();
  const backTag = () => {
    setFilterShow(false);
  };
  return (
    <div className="filter_wrapper">
      <div className="filter_container">
        <p onClick={backTag} className="back">
          <HiChevronDoubleLeft className="tag" /> back
        </p>
        <div className="category_filter">
          {filtersArray.map((filter, i) => {
            return (
              <>
                <p className="filter selected" key={i}>
                  {filter.title} <GrDown className="down_tag" />
                </p>
                <div className="filter_option_list">
                  <ul>
                    {filter.options.map((option, j) => {
                      return (
                        <li key={j}>
                          <button
                            onClick={function (event) {
                              setFilterChoice(option);
                              setFilterShow(false);
                            }}
                            className={
                              filterChoice === option ? "btn-selected" : "btn"
                            }
                            value={option}
                          >
                            {option}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
          {/* <p className="filter selected">
            Category <GrDown className="down_tag" />
          </p>
          <div className="filter_option_list" >
            <ul>
              <li>
                <button className="btn btn-selected" value="all">
                  All
                </button>
              </li>
              <li>
                <button className="btn" value="fruits">
                  Fruits
                </button>
              </li>
              <li>
                <button className="btn" value="egitables">
                  Vegitables
                </button>
              </li>
              <li>
                <button className="btn" value="staples">
                  Staples
                </button>
              </li>
              <li>
                <button className="btn" value="snakes">
                  Snakes
                </button>
              </li>
              <li>
                <button className="btn" value="packedfoods">
                  Packed foods
                </button>
              </li>
              <li>
                <button className="btn" value="dairyandegg">
                  Dairy & egg
                </button>
              </li>
            </ul>
          </div>
          <p className="filter">
            Rating <GrDown className="down_tag" />
          </p>
          <div className="filter_option_list">
            <ul>
              <li>
                <button className="btn" value={5}>
                <Rating
                name="small-size"
                defaultValue={5}
                size="small"
                readOnly
              />
                </button>
              </li>
              <li>
                <button className="btn" value={4}>
                <Rating
                name="small-size"
                defaultValue={4}
                size="small"
                readOnly
              />
                </button>
              </li>
              <li>
                <button className="btn" value={3}>
                <Rating
                name="small-size"
                defaultValue={3}
                size="small"
                readOnly
              />
                </button>
              </li>
              <li>
                <button className="btn" value={2}>
                <Rating
                name="small-size"
                defaultValue={2}
                size="small"
                readOnly
              />
                </button>
              </li>
              <li>
                <button className="btn" value={1}>
                <Rating
                name="small-size"
                defaultValue={1}
                size="small"
                readOnly
              />
                </button>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
