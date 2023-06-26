import { Country, CountryRaw } from "@/app/types/country";
import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://restcountries.com/v3.1/all?fields=name,flags";

/**
 * Fetch all countries.
 * @returns Promise<NextResponse<any>>
 */
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  if (!res.ok) throw new Error("Couldn't fetch countries");

  const resJson: CountryRaw[] = await res.json();

  const resArray: Country[] = [];
  resJson.forEach((country) => {
    resArray.push({
      flag: country.flags.png,
      name: country.name.common,
      officialName: country.name.official,
    });
  });

  return NextResponse.json(resArray);
}
