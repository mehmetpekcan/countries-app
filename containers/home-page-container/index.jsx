import { CountryCard } from "@/components/country-card";

import styles from "./styles.module.scss";

function HomePageContainer({ countries }) {
  if (countries.length === 0) {
    return <div>There is no countries</div>;
  }

  return (
    <div className={styles.countriesWrapper}>
      {countries.map((country) => (
        <CountryCard key={country.name.common} {...country} />
      ))}
    </div>
  );
}

export { HomePageContainer };
