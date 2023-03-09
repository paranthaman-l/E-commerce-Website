// import React from "react";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./flip.css";
const Flip = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div className="frontbox">
        FOR ANY QURIES PLEASE DO <br />
        <button onClick={() => setFlip(!flip)}>Contact us</button>
      </div>
      <div className="backbox">
      
        phone : 93021882118
        <br />
        Tollfree : 909-210-111
        <br />
        <button onClick={() => setFlip(!flip)}>Flip</button>
      </div>
    </ReactCardFlip>
  );
};

export default Flip;
