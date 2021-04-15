import React from "react";
import styles from "./Title.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Title() {
  return (
    <div className={styles.wrapper}>
      <div>微碧愛點餐</div>
      <div className={styles.searchBar}>
        <div>所有餐廳分類</div>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default Title;
