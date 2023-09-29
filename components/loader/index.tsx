import React from "react";
import styles from "./styles.module.css";

export default function Loader() {
  return (
    <div className={styles.contain}>
      <div className={styles.loader}></div>
    </div>
  );
}
