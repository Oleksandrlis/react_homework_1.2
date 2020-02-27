import React from "react";
import StatisticItem from "./StatisticItem";
import styles from "./Statistics.module.css";

const Statistic = ({ statisticaldata }) => {
  return (
    <section className={`${styles.statistics} ${styles.container}`}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statlist}>
        {statisticaldata.map(object => (
          <StatisticItem key={object.id} object={object} />
        ))}
      </ul>
    </section>
  );
};

export default Statistic;
