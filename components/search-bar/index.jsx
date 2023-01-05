"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.scss";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ?? ""
  );

  const updateQuery = () => {
    if (searchValue === "") {
      router.replace("/");
    } else {
      router.replace(`/?search=${searchValue}`);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search country..."
      />
      <button onClick={updateQuery}>Search</button>
    </div>
  );
}

export { SearchBar };
