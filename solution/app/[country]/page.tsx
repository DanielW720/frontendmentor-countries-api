import "material-icons/iconfont/material-icons.css";
import { Backbutton } from "./Backbutton";
import { Details } from "./Details";
import { NextResponse } from "next/server";
import { Country } from "../types/country";

export default async function page({
  params,
}: {
  params: { country: string };
}) {
  const country = params.country.replace(/%20/g, " ");
  const data = await fetchCountry(country);

  return (
    <div className="px-2 lg:w-full lg:px-10">
      <Backbutton />
      <Details country={data} />
    </div>
  );
}

/**
 * Fetch a country.
 * @param request NextRequest
 * @returns Promise<NextResponse<Country>>
 */
async function fetchCountry(country: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  if (!res.ok) throw new Error("Couldn't fetch country");

  const countryJson: Country[] = await res.json();

  const borderCodes = countryJson[0].borders;
  if (borderCodes) {
    const bordersFullnames = await fetchBorderCountryNames(borderCodes);
    countryJson[0].bordersFullnames = await bordersFullnames.json();
  }

  // return countryJson[0];
  return countryJson[0];
}

/**
 * Fetch the full names of the countries.
 * @param borderCodes The list of border codes.
 * @returns Promise<NextResponse<string[]>>
 */
async function fetchBorderCountryNames(
  borderCodes: string[]
): Promise<NextResponse<string[]>> {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha?fields=name&codes=${borderCodes}`
    );
    const borderCountries: BorderCountries[] = await res.json();
    const borderNames: Country["borders"] = [];
    borderCountries.forEach((borderCountry) =>
      borderNames.push(borderCountry.name.common)
    );
    return NextResponse.json(borderNames);
  } catch (e) {
    throw new Error("Couldn't fetch border countries");
  }
}

type BorderCountries = {
  name: {
    common: "Norway";
    official: "Kingdom of Norway";
  };
};
