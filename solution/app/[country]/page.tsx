import "material-icons/iconfont/material-icons.css";
import { Backbutton } from "./Backbutton";
import { Details } from "./Details";
import { Country } from "../types/country";

async function fetchCountry(country: string): Promise<Country> {
  const res = await fetch(`http://localhost:3000/api/countries/${country}`, {
    cache: "no-store",
  });
  return res.json();
}

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
