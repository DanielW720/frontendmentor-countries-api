import "material-icons/iconfont/material-icons.css";
import { Country } from "./types/country";
import { CountryList } from "./ContryList";

async function fetchCountries() {
  const data = await fetch("http://localhost:3000/api/countries");
  return data.json();
}

export default async function page() {
  const data: Country[] = await fetchCountries();

  // const countries = data.slice(0, 9);
  const countries = data;

  return <CountryList countryList={countries} />;
}
