import * as React from "react";
import { Link } from "gatsby";
import Container from "../container";

import * as styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container size="large">
        <nav>
          <Link className={styles.logo} to="/">PB Joinery</Link>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
      </Container>
    </div>
  )
};

export default Header;
