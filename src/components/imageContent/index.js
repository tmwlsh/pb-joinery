import * as React from "react";
import { Link } from "gatsby";
import Container from "../container";

import * as styles from "./style.module.scss";

const ImageContent = ({content}) => {
  const imageContentClasses = [styles.imageContent, styles[content.layout], content.header ? styles['header'] : ''];
  return (
    <div className={imageContentClasses.join(" ")}>
      <Container>
        <div className={styles.imageContentInner}>
          <div className={styles.imageContentImage}></div>
          <div className={styles.imageContentContent}>
            {content.smallHeader && (
              <h1>{content.smallHeader}</h1>
            )}
            <h2>{content.mainHeader}</h2>
            <p>{content.mainCopy}</p>
            {content.link && (
              <Link to={content.link.url}>{content.link.text}</Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
};

export default ImageContent;
