import { CountryCard } from "./CountryCard";
import "material-icons/iconfont/material-icons.css";
import { Searchbar } from "./Searchbar";
import { FilterDropdown } from "./FilterDropdown";

type Country = {
  name: {
    common: string;
    official: string;
  };
};

async function getCountry() {
  const res = await fetch(
    "https://restcountries.com/v3.1/name/deutschland?fields=name"
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return await res.json();
}

export default async function page() {
  const data = (await getCountry()) as Country[];

  return (
    <>
      {data.map((el) => (
        <div className="text-pink-600">
          <p>{el.name.common}</p>
          <p>{el.name.official}</p>
        </div>
      ))}
      <div className="w-full lg:flex justify-center px-6">
        <div className="flex flex-col  md:flex-row md:items-center justify-between lg:w-[896px] xl:w-[1216px]">
          <Searchbar />
          <FilterDropdown />
        </div>
      </div>
      <article className="py-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-16 w-fit">
          <CountryCard imageUrl="https://flagcdn.com/w320/de.png" />
          <CountryCard imageUrl="https://flagcdn.com/w320/gh.png" />
          <CountryCard imageUrl="https://flagcdn.com/w320/gi.png" />
          <CountryCard imageUrl="https://flagcdn.com/w320/gr.png" />
          <CountryCard imageUrl="https://flagcdn.com/w320/gl.png" />
        </div>
      </article>
    </>
  );
}
