import { Skeleton } from "@/components/skeleton";

import styles from "./styles.module.scss";

function HomePageContainerLoading() {
  return (
    <div className={styles.countriesWrapper}>
      {Array(12)
        .fill()
        .map((_, index) => (
          <Skeleton key={index} height="256px" />
        ))}
    </div>
  );
}

export { HomePageContainerLoading };
