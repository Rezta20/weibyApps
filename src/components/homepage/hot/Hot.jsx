import React from "react";
import styles from "./Hot.module.scss";

import HotText from "./hotText/HotText";
import HotCards from "./hotCards/HotCards";

function Hot() {
  return (
    <div className={styles.wrapper}>
      <HotText />
      <HotCards />
    </div>
  );
}

export default Hot;
