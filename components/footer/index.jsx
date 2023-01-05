import Link from "next/link";
import { Logo } from "@/components/logo";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />

      <p>
        Built by&nbsp;
        <Link href="https://twitter.com/_mehmetpekcan" target="_blank">
          @mehmetpekcan
        </Link>
      </p>
    </footer>
  );
}

export { Footer };
