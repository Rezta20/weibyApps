import React from "react";
import styles from "./Footer.module.scss";
import appstore from "../../../image/appstore.png";
import googleplay from "../../../image/googleplay.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faWordpress,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          <li>關於我們</li>
          <li>所有餐廳分類</li>
          <li>加入我們</li>
          <li>店家代碼說明</li>
          <li>後台管理</li>
        </ul>
      </nav>
      <div className={styles.rights}>
        <div className={styles.mailWrapper}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>help@iding.tw</p>
        </div>
        <p>Demo For WEIBYAPPS © By Hsiao-Hsuan </p>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faWordpress} />
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className={styles.appWrapper}>
          <img className={styles.appstore} src={appstore} alt="appstore" />
          <img
            className={styles.googlePlay}
            src={googleplay}
            alt="googleplay"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
