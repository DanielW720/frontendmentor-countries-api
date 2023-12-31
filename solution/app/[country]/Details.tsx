import Link from "next/link";
import { Country } from "../types/country";
import { CountryFlag } from "./CountryFlag";

export const Details = ({ country }: { country: Country }) => {
  // Extract native names
  let nativeNames;
  if (country.name.nativeName) {
    let names: string[] = Object.keys(country.name.nativeName).map(
      (key) => country.name.nativeName[key].common
    );
    // Remove duplicates eventual duplicates
    nativeNames = [...new Set(names)];
    // Make a pretty string
    nativeNames = nativeNames.join(", ");
  }

  // Extract currencies
  let currencies;
  if (country.currencies)
    currencies = Object.keys(country.currencies)
      .map((key) => country.currencies[key].name)
      .join(", ");

  // Extract languages
  let languages;
  if (country.languages)
    languages = Object.keys(country.languages)
      .map((key) => country.languages[key])
      .join(", ");

  // Extract bordering countries ()
  let bordersFullnames;
  if (country.bordersFullnames)
    bordersFullnames = country.bordersFullnames?.map((borderCountry) => (
      <Link
        key={borderCountry}
        href={`/${borderCountry}`}
        className="py-1 px-4 shadow-lgSymmetric font-semibold w-28 flex justify-center items-center text-sm rounded-sm dark:bg-darkBlue"
      >
        {borderCountry}
      </Link>
    ));

  return (
    <article className="grid grid-cols-1 lg:grid-cols-oneThirdTwoThirds gap-10 justify-items-start mt-16 w-full lg:gap-0 text-veryDarkBlueText dark:text-white tracking-wide">
      <CountryFlag flags={country.flags} />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <h2 className="text-3xl font-bold lg:col-start-1 lg:col-end-3 lg:mt-2">
          {country.name.common}
        </h2>
        <ul className="my-6">
          <li className="my-2">
            <p className="font-bold">
              Native Name:{" "}
              <span className="font-semibold text-darkGrayText dark:text-cardLightGrayText">
                {nativeNames ? nativeNames : "None"}
              </span>
            </p>
          </li>
          <li className="my-2">
            <p className="font-bold">
              Population:{" "}
              <span className="font-semibold text-darkGrayText dark:text-cardLightGrayText">
                {country.population.toLocaleString()}
              </span>
            </p>
          </li>
          <li className="my-2">
            <p className="font-bold">
              Region:
              <span className="font-semibold text-darkGrayText dark:text-cardLightGrayText">
                {" "}
                {country.region}
              </span>
            </p>
          </li>
          <li className="my-2">
            <p className="font-bold">
              Sub Region:{" "}
              <span className="font-semibold text-darkGrayText dark:text-cardLightGrayText">
                {country.subregion}
              </span>
            </p>
          </li>
          <li className="my-2">
            <p className="font-bold">
              Capital:
              <span className="font-semibold text-darkGrayText dark:text-cardLightGrayText">
                {" "}
                {country.capital}
              </span>
            </p>
          </li>
        </ul>
        <ul className="lg:mt-6">
          <li className="my-2">
            <p className="font-bold">
              Top Level Domain:{" "}
              <span className="font-semibold text-darkGrayText dark:text-cardLightGrayText">
                {country.tld.map((e) => e).join(", ")}
              </span>
            </p>
          </li>
          <li className="my-2">
            <p className="font-bold">
              Currencies:{" "}
              <span className="font-semibold text-darkGrayText dark:text-cardLightGrayText">
                {currencies ? currencies : "None"}
              </span>
            </p>
          </li>
          <li className="my-2">
            <p className="font-bold">
              Languages:{" "}
              <span className="font-semibold text-darkGrayText dark:text-cardLightGrayText">
                {languages ? languages : "None"}
              </span>
            </p>
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start mt-6 lg:mt-0 lg:col-start-1 lg:col-end-3">
          <h3 className="text-xl font-bold lg:text-lg lg:mr-10">
            Border Countries:
          </h3>
          <div className="flex justify-center items-center mt-4 lg:mt-0">
            <div className="grid grid-cols-2 justify-items-center gap-4 w-fit justify-self-center xs:grid-cols-3 ">
              {bordersFullnames ? (
                bordersFullnames
              ) : (
                <p className="text-sm rounded-sm dark:bg-darkBlue bg-darkGrayInput/10 p-1">
                  None
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
