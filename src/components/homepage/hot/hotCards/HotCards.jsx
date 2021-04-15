import React from "react";
import styles from "./HotCards.module.scss";

function Card(props) {
  return (
    <div className={styles.cardWrapper}>
      <div>Image</div>
      <p className="shopName">{props.shopName}</p>
    </div>
  );
}

function HotCards() {
  return (
    <div className={styles.cardsWrapper}>
      <Card shopName="拉雅漢堡" />
      <Card shopName="麥味登" />
      <Card shopName="愛之味脆瓜" />
      <Card shopName="愛之味脆瓜" />
      <Card shopName="愛之味脆瓜" />
      <Card shopName="愛之味脆瓜" />
    </div>
  );
}

export default HotCards;
