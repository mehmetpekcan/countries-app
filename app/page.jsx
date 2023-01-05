import { getCountries } from "@/services/country";
import { HomePageContainer } from "@/containers/home-page-container";

async function HomePage({ searchParams: { search = "" } }) {
  const countries = await getCountries();

  return (
    <HomePageContainer
      countries={countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )}
    />
  );
}

export const dynamic = "force-dynamic";
export default HomePage;
