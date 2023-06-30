import { Country } from "../types/country";
import { CountryFlag } from "./CountryFlag";

export const Details = ({ country }: { country: Country }) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-oneThirdTwoThirds gap-10 justify-items-start mt-16 w-full lg:gap-0">
      <CountryFlag />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <h2 className="text-3xl font-bold lg:col-start-1 lg:col-end-3 lg:mt-4">
          {country.name.common}
        </h2>
        <ul className="my-6">
          <li className="my-2">
            <span className="font-semibold">Native Name: </span>België
          </li>
          <li className="my-2">
            <span className="font-semibold">Population: </span>11,319,511
          </li>
          <li className="my-2">
            <span className="font-semibold">Region: </span>Europe
          </li>
          <li className="my-2">
            <span className="font-semibold">Sub Region: </span>Western Europe
          </li>
          <li className="my-2">
            <span className="font-semibold">Capital: </span>Brussels
          </li>
        </ul>
        <ul className="lg:mt-6">
          <li className="my-2">
            <span className="font-semibold">Top Level Domain: </span>.be
          </li>
          <li className="my-2">
            <span className="font-semibold">Currencies: </span>Euro
          </li>
          <li className="my-2">
            <span className="font-semibold">Languages: </span>Dutch, French,
            German
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start mt-6 lg:mt-0 lg:col-start-1 lg:col-end-3 lg:h-20">
          <h3 className="text-xl font-semibold justify-self-start lg:text-lg lg:mr-4">
            Border Countries:
          </h3>
          <div className="flex justify-center items-center mt-4 lg:mt-0">
            <div className="grid grid-cols-2 justify-items-center gap-4 w-fit justify-self-center xs:grid-cols-3 ">
              {["France", "Germany", "Netherlands"].map((country) => (
                <div
                  key={country}
                  className="py-1 shadow-lgSymmetric font-semibold w-24 flex justify-center items-center text-sm rounded-sm dark:bg-darkBlue"
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
