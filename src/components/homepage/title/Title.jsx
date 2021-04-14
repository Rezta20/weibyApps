import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Title() {
  return (
    <div className="wrapper">
      <div className="name">微碧愛點餐</div>
      <div className="category">所有餐廳分類</div>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default Title;
