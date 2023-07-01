import { Country } from "@/app/types/country";
import { NextRequest, NextResponse } from "next/server";

/**
 * Fetch a country.
 * @param request NextRequest
 * @returns Promise<NextResponse<Country>>
 */
export async function GET(
  request: NextRequest
): Promise<NextResponse<Country>> {
  const uri = request.nextUrl.pathname;
  const country = uri.slice(uri.lastIndexOf("/") + 1);

  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  if (!res.ok) throw new Error("Couldn't fetch country");

  const countryJson: Country[] = await res.json();

  const borderCodes = countryJson[0].borders;
  if (borderCodes) {
    const bordersFullnames = await fetchBorderCountryNames(borderCodes);
    countryJson[0].bordersFullnames = await bordersFullnames.json();
  }

  return NextResponse.json(countryJson[0]);
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
