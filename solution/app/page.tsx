import { CountryCard } from "./CountryCard";
import "material-icons/iconfont/material-icons.css";
import { Searchbar } from "./Searchbar";
import { FilterDropdown } from "./FilterDropdown";
import { Country } from "./types/country";

async function fetchCountries() {
  const data = await fetch("http://localhost:3000/api/countries");
  return data.json();
}

export default async function page() {
  const countries: Country[] = await fetchCountries();

  const sixCountries = countries.slice(0, 6);

  return (
    <>
      <div className="w-full lg:flex justify-center px-6">
        <div className="flex flex-col  md:flex-row md:items-center justify-between lg:w-[896px] xl:w-[1216px]">
          <Searchbar />
          <FilterDropdown />
        </div>
      </div>
      <article className="py-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-16 w-fit">
          {sixCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </article>
    </>
  );
}
