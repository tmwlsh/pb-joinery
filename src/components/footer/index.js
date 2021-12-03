import * as React from "react";
import { Link } from "gatsby";
import Container from "../container";

import * as styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container size="large">
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <div className={styles.footerCol}>
              <h1>PB Joinery</h1>
            </div>
            <div className={styles.footerCol}>
              <h3>Services</h3>
              <ul>
                <li><Link to="/">Bathroom Fitting</Link></li>
                <li><Link to="/">Kitchen Fitting</Link></li>
                <li><Link to="/">Door Specialists</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerRight}>
            <p>&copy; PB Joinery LTD</p>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default Footer;
