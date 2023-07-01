import { Country } from "../types/country";
import { CountryFlag } from "./CountryFlag";

export const Details = ({ country }: { country: Country }) => {
  // Extract native names
  const nativeNames = Object.keys(country.name.nativeName).map((key) => {
    const nativeName = (country.name.nativeName[key] = {
      official: country.name.nativeName[key].official,
      common: country.name.nativeName[key].common,
    });
    return <span>{nativeName.common}</span>;
  });

  // Extract currencies
  const currencies = Object.keys(country.currencies).map((key) => {
    const currency = (country.currencies[key] = {
      name: country.currencies[key].name,
      symbol: country.currencies[key].symbol,
    });
    return <span>{currency.name}</span>;
  });

  // Extract languages
  const languages = Object.keys(country.languages).map((key) => (
    <span>{country.languages[key]}</span>
  ));

  // Extract bordering countries ()
  const bordersFullnames = country.bordersFullnames?.map((borderCountry) => (
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
        <h2 className="text-3xl font-bold lg:col-start-1 lg:col-end-3 lg:mt-4">
          {country.name.common}
        </h2>
        <ul className="my-6">
          <li className="my-2">
            <p className="font-semibold">Native Name: {nativeNames[0]}</p>
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
                <span>{e}</span>
              ))}
            </p>
          </li>
          <li className="my-2">
            <p className="font-semibold">Currencies: {currencies}</p>
          </li>
          <li className="my-2">
            <p className="font-semibold">Languages: {languages}</p>
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
