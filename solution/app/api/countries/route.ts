import { NextResponse } from "next/server";

const DATA_SOURCE_URL =
  "https://restcountries.com/v3.1/name/deutschland?fields=name";

/**
 * Fetch all countries.
 * @returns Promise<NextResponse<any>>
 */
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  if (!res.ok) throw new Error("Couldn't fetch country");

  return NextResponse.json(await res.json());
}
