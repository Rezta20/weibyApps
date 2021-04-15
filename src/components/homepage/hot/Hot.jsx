import React from "react";
import "./Hot.module.scss";

import HotText from "./hotText/HotText";
import HotCard from "./hotCard/HotCard";

function Hot() {
  return (
    <div className="hotWrapper">
      Hot Render
      <HotText />
      <HotCard />
    </div>
  );
}

export default Hot;
