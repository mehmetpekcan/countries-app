import { SeoHead } from "@/components/seo-head";
import { getCountry } from "@/services/country";

async function CountryPageHead({ params }) {
  const [country] = await getCountry(params.slug);

  const countryName = country.name.common;
  const canonical = `https://${process.env.BASE_URL}/country/${countryName}`;

  return (
    <SeoHead
      title={countryName}
      canonical={canonical}
      description={`Information of ${countryName}`}
      keywords={countryName}
      url={canonical}
      image={country.flags.png}
    />
  );
}

export default CountryPageHead;
