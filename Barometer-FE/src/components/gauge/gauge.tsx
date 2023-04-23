import { useEffect } from "react";

import styles from "./gauge.module.css";

type gaugeProps = {
  pressure: any;
  status: string;
  city: string;
};

export const Gauge = ({ pressure, status, city }: gaugeProps): JSX.Element => {
  const setRotate = (pressure: number) => {
    if (pressure <= 954) {
      document.documentElement.style.setProperty("--rotate", "rotate(-108deg)");
    } else if (pressure <= 978) {
      document.documentElement.style.setProperty("--rotate", "rotate(-54deg)");
    } else if (pressure <= 1002) {
      document.documentElement.style.setProperty("--rotate", "rotate(0deg)");
    } else if (pressure <= 1026) {
      document.documentElement.style.setProperty("--rotate", "rotate(54deg)");
    } else if (pressure <= 1050) {
      document.documentElement.style.setProperty("--rotate", "rotate(108deg)");
    }
  };

  useEffect(() => {
    setRotate(pressure);
  }, [pressure]);

  return (
    <div className={styles.gauge}>
      <div className={styles.progress}>
        <div className={styles.needle}></div>
        <div className={styles.indication1}>Stormy</div>
        <div className={styles.indication2}>Rain</div>
        <div className={styles.indication3}>Change</div>
        <div className={styles.indication4}>Fair</div>
        <div className={styles.indication5}>Very dry</div>
        <div className={styles.city}>{city}</div>
        <div className={styles.data}>
          <p className={styles.dataItem}>{pressure} hPa</p>
          <p className={styles.dataItem}>{status}</p>
        </div>
      </div>
    </div>
  );
};
