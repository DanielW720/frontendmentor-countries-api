import { Country } from "@/app/types/country";
import { NextRequest, NextResponse } from "next/server";

/**
 * Fetch a country.
 * @param request NextRequest
 * @returns Promise<NextResponse<any>>
 */
export async function GET(request: NextRequest) {
  const uri = request.nextUrl.pathname;
  const country = uri.slice(uri.lastIndexOf("/") + 1);

  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  if (!res.ok) throw new Error("Couldn't fetch country");

  const countryJson: Country[] = await res.json();

  return NextResponse.json(countryJson[0]);
}
