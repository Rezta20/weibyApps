import React from "react";
import styles from "./PicturePlayer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function PicturePlayer() {
  return (
    <div>
      <div className={styles.picture}></div>
      <div className={styles.arrowWrapper}>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className={styles.dotWrapper}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.contentWrapper}>
        <div>
          <h1>微碧愛點餐</h1> <br />
          <p> 點餐不用等，取餐就要快狠準</p>
        </div>
        <button>立即搜尋餐廳</button>
      </div>
    </div>
  );
}

export default PicturePlayer;
