import React from "react";
import styles from "./Search.module.scss";

function Search() {
  return (
    <div className={styles.wrapper}>
      <form action="/search" method="post">
        <label>搜尋餐廳</label>
        <p>您可在此找到想吃的美食餐廳，也可在這裡查詢到所需的店家代碼喔！</p>
        <input type="text" placeholder="輸入餐廳關鍵字" />
        <button>搜尋</button>
      </form>
    </div>
  );
}

export default Search;
