import { Country } from "../types/country";
import { CountryFlag } from "./CountryFlag";

export const Details = ({ country }: { country: Country }) => {
  // Extract native names
  let nativeNames;
  if (country.name.nativeName)
    nativeNames = Object.keys(country.name.nativeName).map((key) => {
      const nativeName = (country.name.nativeName[key] = {
        official: country.name.nativeName[key].official,
        common: country.name.nativeName[key].common,
      });
      return <span key={key}>{nativeName.common}</span>;
    });

  // Extract currencies
  let currencies;
  if (country.currencies)
    currencies = Object.keys(country.currencies).map((key) => {
      const currency = (country.currencies[key] = {
        name: country.currencies[key].name,
        symbol: country.currencies[key].symbol,
      });
      return <span key={key}>{currency.name}</span>;
    });

  // Extract languages
  let languages;
  if (country.languages)
    languages = Object.keys(country.languages).map((key) => (
      <span key={key}>{country.languages[key]}</span>
    ));

  // Extract bordering countries ()
  let bordersFullnames;
  if (country.bordersFullnames)
    bordersFullnames = country.bordersFullnames?.map((borderCountry) => (
      <div
        key={borderCountry}
        className="py-1 px-4 shadow-lgSymmetric font-semibold w-28 flex justify-center items-center text-sm rounded-sm dark:bg-darkBlue"
      >
        {borderCountry}
      </div>
    ));

  return (
    <article className="grid grid-cols-1 lg:grid-cols-oneThirdTwoThirds gap-10 justify-items-start mt-16 w-full lg:gap-0">
      <CountryFlag flags={country.flags} />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <h2 className="text-3xl font-bold lg:col-start-1 lg:col-end-3 lg:mt-2">
          {country.name.common}
        </h2>
        <ul className="my-6">
          <li className="my-2">
            <p className="font-semibold">
              Native Name: {nativeNames ? nativeNames[0] : "None"}
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
            <p className="font-semibold">
              Top Level Domain:{" "}
              {country.tld.map((e) => (
                <span key={e}>{e}</span>
              ))}
            </p>
          </li>
          <li className="my-2">
            <p className="font-semibold">
              Currencies: {currencies ? currencies : "None"}
            </p>
          </li>
          <li className="my-2">
            <p className="font-semibold">
              Languages: {languages ? languages : "None"}
            </p>
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start mt-6 lg:mt-0 lg:col-start-1 lg:col-end-3">
          <h3 className="text-xl font-semibold lg:text-lg lg:mr-10">
            Border Countries:
          </h3>
          <div className="flex justify-center items-center mt-4 lg:mt-0">
            <div className="grid grid-cols-2 justify-items-center gap-4 w-fit justify-self-center xs:grid-cols-3 ">
              {bordersFullnames ? (
                bordersFullnames
              ) : (
                <p className="text-sm rounded-sm dark:bg-darkBlue p-1">None</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
