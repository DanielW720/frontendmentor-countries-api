import { CountryCard } from "./CountryCard";
import "material-icons/iconfont/material-icons.css";
import { Searchbar } from "./Searchbar";
import { Filter } from "./Filter";
import { FilterDropdown } from "./FilterDropdown";

export default function Home() {
  return (
    <main className="min-h-screen pt-8">
      <div className="flex flex-col md:flex-row md:items-center px-6 justify-between">
        <Searchbar />
        <FilterDropdown />
      </div>

      {/* Content */}
      <article className="flex flex-col items-center justify-start">
        <div className="my-10">
          <CountryCard imageUrl="https://flagcdn.com/w320/de.png" />
        </div>
        <div className="my-10">
          <CountryCard imageUrl="https://flagcdn.com/w320/de.png" />
        </div>
      </article>
    </main>
  );
}
