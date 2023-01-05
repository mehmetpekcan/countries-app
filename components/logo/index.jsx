import Link from "next/link";
import styles from "./styles.module.scss";

function Logo() {
  return (
    <Link className={styles.logo} href="/">
      Countries
    </Link>
  );
}

export { Logo };
