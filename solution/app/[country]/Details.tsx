import { Country } from "../types/country";
import { CountryFlag } from "./CountryFlag";

export const Details = ({ country }: { country: Country }) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-oneThirdTwoThirds gap-10 justify-items-start mt-16 w-full lg:gap-0">
      <CountryFlag flags={country.flags} />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <h2 className="text-3xl font-bold lg:col-start-1 lg:col-end-3 lg:mt-4">
          {country.name.common}
        </h2>
        <ul className="my-6">
          <li className="my-2">
            <p className="font-semibold">
              Native Name:{" "}
              {Object.keys(country.name.nativeName).map((key) => {
                const nativeName = (country.name.nativeName[key] = {
                  official: country.name.nativeName[key].official,
                  common: country.name.nativeName[key].common,
                });
                return <span>{nativeName.common}</span>;
              })}
            </p>
          </li>
          <li className="my-2">
            <p className="font-semibold">Population: {country.population}</p>
          </li>
          <li className="my-2">
            <p className="font-semibold">Region: {country.region}</p>
          </li>
          <li className="my-2">
            <p className="font-semibold">Sub Region: {country.subregion}</p>
          </li>
          <li className="my-2">
            <p className="font-semibold">Capital: {country.capital}</p>
          </li>
        </ul>
        <ul className="lg:mt-6">
          <li className="my-2">
            <p className="font-semibold">Top Level Domain: {country.tkd}</p>
          </li>
          <li className="my-2">
            <p className="font-semibold">
              Currencies:{" "}
              {Object.keys(country.currencies).map((key) => {
                const currency = (country.currencies[key] = {
                  name: country.currencies[key].name,
                  symbol: country.currencies[key].symbol,
                });
                return <span>{currency.name}</span>;
              })}
            </p>
          </li>
          <li className="my-2">
            <p className="font-semibold">
              Languages:{" "}
              {Object.keys(country.languages).map((key) => (
                <span>{country.languages[key]}</span>
              ))}
            </p>
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start mt-6 lg:mt-0 lg:col-start-1 lg:col-end-3 lg:h-20">
          <h3 className="text-xl font-semibold justify-self-start lg:text-lg lg:mr-4">
            Border Countries:
          </h3>
          <div className="flex justify-center items-center mt-4 lg:mt-0">
            <div className="grid grid-cols-2 justify-items-center gap-4 w-fit justify-self-center xs:grid-cols-3 ">
              {country.borders.map((borderCountry) => (
                <div
                  key={borderCountry}
                  className="py-1 shadow-lgSymmetric font-semibold w-24 flex justify-center items-center text-sm rounded-sm dark:bg-darkBlue"
                >
                  {borderCountry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
