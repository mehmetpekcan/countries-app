import { SeoHead } from "@/components/seo-head";

async function CountryPageHead() {
  const canonical = `https://${process.env.BASE_URL}/`;

  return (
    <SeoHead
      title="Countires List"
      canonical={canonical}
      description={`Country lists based on their informations`}
      keywords={"country, list, information"}
      url={canonical}
    />
  );
}

export default CountryPageHead;
