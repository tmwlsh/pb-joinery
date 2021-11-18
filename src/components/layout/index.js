import * as React from "react";
import Header from "../header";
import Footer from "../footer";

import "../../sass/basics.scss";

import * as styles from "./style.module.scss";

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
};

export default Layout;
