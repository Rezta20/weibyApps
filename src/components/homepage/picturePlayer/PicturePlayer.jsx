import React from "react";
import "./PicturePlayer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function PicturePlayer() {
  return (
    <div>
      <div className="picture"></div>
      <div className="arrowWrapper">
        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="dotWrapper">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="contentWrapper">
        <div>
          微碧愛點餐 <br />
          <p> 點餐不用等，取餐就要快狠準</p>
        </div>
        <button>立即搜尋餐廳</button>
      </div>
    </div>
  );
}

export default PicturePlayer;
