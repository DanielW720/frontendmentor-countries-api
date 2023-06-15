import { CountryCard } from "./CountryCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-4">
      <div>
        <div>Searchbar</div>
        <div>Filer by Region</div>
      </div>
      <article className="">
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
