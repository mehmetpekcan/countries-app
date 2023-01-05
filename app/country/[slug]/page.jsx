import { getCountry, getCountries } from "@/services/country";
import { CountryPageContainer } from "@/containers/country-page-container";
import { notFound } from "next/navigation";

async function CountryPage({ params }) {
  const [country] = await getCountry(params.slug);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!country) {
    notFound();
  }

  return <CountryPageContainer {...country} />;
}

export async function generateStaticParams() {
  const countries = await getCountries();
  return countries.map((country) => ({ slug: country.name.common }));
}

export default CountryPage;
