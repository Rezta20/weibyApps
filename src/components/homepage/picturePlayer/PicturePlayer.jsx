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
    </div>
  );
}

export default PicturePlayer;
