import styles from "./styles.module.scss";

function Skeleton({ width = "100%", height = "100%", ...style }) {
  return (
    <div className={styles.skeleton} style={{ width, height, ...style }}></div>
  );
}

export { Skeleton };
