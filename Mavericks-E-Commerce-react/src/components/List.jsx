import { NavLink } from "react-router-dom";
import profile from "../Images/profile.jfif";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../Css/List.css";
import Logo from "../Images/Logo.png";
import SearchBar from "./SearchBar";
import BookData from "./Data.json";

const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          {/* <SearchBar placeholder="Search" data={BookData} className='searchbar'/> */}
          <nav>
            <div className="list">
              <NavLink
                exact
                to="/"
                className="listitem"
                activeClassName="activeItem"
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/login"
                className="listitem"
                activeClassName="activeItem"
              >
                Login
              </NavLink>
              <NavLink
                to="/location"
                className="listitem"
                activeClassName="activeItem"
              >
                <a href="https://www.google.com/maps/place/Gandhipuram,+Tamil+Nadu+641012/@11.0175838,76.9498979,14z/data=!3m1!4b1!4m5!3m4!1s0x3ba85855910aed83:0x80875de5cd370a9d!8m2!3d11.0175845!4d76.9674075">
                  Location
                  <LocationOnIcon activeClassName="activeItem" />{" "}
                </a>{" "}
              </NavLink>
              <NavLink
                exact
                to="/about"
                className="listitem"
                activeClassName="activeItem"
              >
                About
              </NavLink>
            </div>
          </nav>

          <div className="icons">
            <ShoppingCartOutlinedIcon className="shopping-icon" />
            <img src={profile} alt="profile" className="profile" />
          </div>
        </div>
      </header>
    </>
  );
};

export default List;
