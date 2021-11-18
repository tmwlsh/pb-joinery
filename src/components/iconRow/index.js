import * as React from "react";
import Container from "../container";

import * as styles from "./style.module.scss";

import Smile from "../../svgs/smile.svg";
import Tick from "../../svgs/tick.svg";
import Globe from "../../svgs/globe.svg";

const IconRow = () => {
  return (
    <div className={styles.iconRow}>
      <Container>
        <div className={styles.iconRowInner}>
          <div className={styles.iconRowBlock}>
            <Smile />
            <h3>Expert Advice</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel vulputate massa, quis sodales nibh. Ut vitae orci odio. Pellentesque nisi ante, dapibus et eros eget, iaculis cursus mauris.</p>
          </div>
          <div className={styles.iconRowBlock}>
            <Tick />
            <h3>Quality Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel vulputate massa, quis sodales nibh. Ut vitae orci odio. Pellentesque nisi ante, dapibus et eros eget, iaculis cursus mauris.</p>
          </div>
          <div className={styles.iconRowBlock}>
            <Globe />
            <h3>Local &amp; Independent</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel vulputate massa, quis sodales nibh. Ut vitae orci odio. Pellentesque nisi ante, dapibus et eros eget, iaculis cursus mauris.</p>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default IconRow;
