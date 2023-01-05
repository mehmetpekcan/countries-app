import styles from "./styles.module.scss";

import { Logo } from "@/components/logo";
import { SearchBar } from "@/components/search-bar";

function Header(params) {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
    </header>
  );
}

export { Header };
