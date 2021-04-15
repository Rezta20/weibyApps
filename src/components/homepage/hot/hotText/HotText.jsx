import React from "react";
import styles from "./HotText.module.scss";

function HotText() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}> 熱門店家</div>
      <p className={styles.content}>推薦精選餐廳，就是要你吃得滿足！</p>
    </div>
  );
}

export default HotText;
