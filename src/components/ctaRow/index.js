import * as React from "react";
import { Link } from "gatsby";
import Container from "../container";

import * as styles from "./style.module.scss";

const CtaRow = ({content}) => {
  return (
    <div className={styles.ctaRow}>
      <Container size="small">
        <h3>{content.header}</h3>
        <p>{content.text}</p>
        <Link to={content.link.url}>{content.link.text}</Link>
      </Container>
    </div>
  )
};

export default CtaRow;
