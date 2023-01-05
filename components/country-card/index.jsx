import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

function CountryCard({ flags, name, capital, population }) {
  return (
    <div className={styles.countryCard}>
      <div className={styles.imageWrapper}>
        <Image src={flags.svg} alt={name.common} fill />
      </div>
      <div className={styles.content}>
        <div className={styles.badges}>
          <p className={styles.badge}>{capital}</p>
          <p className={styles.badge}>
            {new Intl.NumberFormat().format(population)}
          </p>
        </div>
        <Link className={styles.title} href={`/country/${name.common}`}>
          {name.common}
        </Link>
      </div>
    </div>
  );
}

export { CountryCard };
