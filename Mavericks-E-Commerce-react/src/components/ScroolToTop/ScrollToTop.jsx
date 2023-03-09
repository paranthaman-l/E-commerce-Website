import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import Fab from "@mui/material/Fab";
import "../../index.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <Fab size="small" onClick={goToTop} color="success" aria-label="add">
          <FaAngleUp size={23} className="icon-position icon-style" />
        </Fab>
      )}
    </div>
  );
};
export default ScrollToTop;
