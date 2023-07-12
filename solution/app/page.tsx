import "material-icons/iconfont/material-icons.css";
import { Country } from "./types/country";
import { CountryList } from "./CountryList";

export const metadata = {
  title: "Frontend Mentor Countries API app",
  description:
    "Frontend Mentor challange app with with the Countries REST API.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const DATA_SOURCE_URL = "https://restcountries.com/v3.1/all";

export default async function page() {
  const data: Country[] = await fetchCountries();
  const countries = data;

  return <CountryList countryList={countries} />;
}

/**
 * Fetch all countries.
 * @returns Promise<NextResponse<any>>
 */
async function fetchCountries() {
  const res = await fetch(DATA_SOURCE_URL);

  if (!res.ok) throw new Error("Couldn't fetch countries");

  const resJson: Country[] = await res.json();

  const countries: Country[] = [];
  resJson.forEach((country) => {
    // Iterating over dynamic keys for currencies
    const currencies = {} as Country["currencies"];
    if (country.currencies) {
      Object.keys(country.currencies).forEach((key) => {
        currencies[key] = {
          name: country.currencies[key].name,
          symbol: country.currencies[key].symbol,
        };
      });
    }

    // Iterating over dynamic keys for nativeNames
    const nativeName = {} as Country["name"]["nativeName"];
    if (country.name.nativeName) {
      Object.keys(country.name.nativeName).forEach((key) => {
        nativeName[key] = {
          official: country.name.nativeName[key].official,
          common: country.name.nativeName[key].common,
        };
      });
    }

    // Iterating over dynamic keys for languages
    const languages = {} as Country["languages"];
    if (country.languages) {
      Object.keys(country.languages).forEach((key) => {
        languages[key] = country.languages[key];
      });
    }

    countries.push({
      flags: {
        png: country.flags.png,
        alt: country.flags.alt,
      },
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      tld: country.tld,
      currencies,
      languages,
      borders: country.borders,
      name: {
        common: country.name.common,
        official: country.name.official,
        nativeName,
      },
    });
  });

  return countries;
}
