import React from "react";
import styles from "./Info.module.scss";

function Info() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <p>網路上看到的都是我們的店家喔，</p>
        <br />
        <p>快來加入我們！</p>
        <div className={styles.line}></div>
        <h1>微碧智慧店面</h1>
        <div className={styles.sentence}>
          <h2>iPad餐飲POS</h2> <p>用智慧輕鬆管理</p>
        </div>
        <button>我想要了解</button>
      </div>
    </div>
  );
}

export default Info;
