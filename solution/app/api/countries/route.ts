import { Country } from "@/app/types/country";
import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://restcountries.com/v3.1/all";

/**
 * Fetch all countries.
 * @returns Promise<NextResponse<any>>
 */
export async function GET() {
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

    countries.push({
      flags: {
        png: country.flags.png,
        alt: country.flags.alt,
      },
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      tkd: country.tkd,
      currencies,
      name: {
        common: country.name.common,
        official: country.name.official,
        nativeName,
      },
    });
  });

  return NextResponse.json(countries);
}
