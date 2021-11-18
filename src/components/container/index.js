import * as React from "react";

import * as styles from "./style.module.scss";

const Container = ({children, size="large"}) => {
  const containerStyles = [styles.container, styles[size]];
  return (
    <div className={containerStyles.join(" ")}>
      {children}
    </div>
  )
};

export default Container;
