import { CountryCard } from "./CountryCard";
import "material-icons/iconfont/material-icons.css";
import { Searchbar } from "./Searchbar";
import { Filter } from "./Filter";
import { Popover } from "./Popover";

export default function Home() {
  return (
    <main className="min-h-screen pt-8">
      <Searchbar />
      <Filter />

      {/* Trying out radix */}
      <Popover />

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
