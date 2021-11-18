import * as React from "react";
import Container from "../container";

import * as styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container size="large">
        <h1>Footer</h1>
      </Container>
    </div>
  )
};

export default Footer;
