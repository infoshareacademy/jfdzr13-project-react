import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.app}>
      <header className={styles.navbar}>
        <Navbar />
      </header>
      <main className={styles.page_content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
