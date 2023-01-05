import Image from "next/image";
import styles from "./styles.module.scss";

function CountryPageContainer({
  name,
  continents,
  population,
  capital,
  flags,
}) {
  return (
    <div className={styles.countryPageContainer}>
      <div className={styles.imageWrapper}>
        <Image src={flags.svg} alt={name.common} fill />
      </div>
      <h1 className={styles.title}>{name.official}</h1>
      <div className={styles.content}>
        <p>
          <strong>Continent:</strong> {continents?.join(" ")}
        </p>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Capital:</strong> {capital?.join(" ")}
        </p>
      </div>
    </div>
  );
}

export { CountryPageContainer };
