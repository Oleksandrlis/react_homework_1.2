import React from "react";
import styles from "./Statistics.module.css";

const StatisticItem = ({ object }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{object.label}</span>
      <span className={styles.percentage}>{object.percentage}</span>
    </li>
  );
};

export default StatisticItem;
