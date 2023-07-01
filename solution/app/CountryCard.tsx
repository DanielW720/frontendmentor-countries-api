import Image from "next/image";
import Link from "next/link";
import { Country } from "./types/country";

export const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Link href={`/${country.name.common}`}>
      <div className="shadow-mdSymmetric flex flex-col items-start justify-start rounded-lg dark:bg-darkBlue h-[340px] w-[256px]">
        <div className="relative w-full h-[160px]">
          <Image
            src={country.flags.png}
            alt={country.flags.alt ? country.flags.alt : ""}
            fill
            sizes="(max-width: 340px) 100vw"
            className="rounded-t-lg"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkf71zFQAFIwJfy/HRLAAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="mt-2 ml-6 mb-8">
          <h2 className="font-bold text-lg my-4">{country.name.common}</h2>
          <ul>
            <li className="my-1">
              <span className="font-semibold">Population: </span>
              <span className="dark:text-cardLightGrayText">
                {country.population}
              </span>
            </li>
            <li className="my-1">
              <span className="font-semibold">Region: </span>
              <span className="dark:text-cardLightGrayText">
                {country.region}
              </span>
            </li>
            <li className="my-1">
              <span className="font-semibold">Capital: </span>
              <span className="dark:text-cardLightGrayText">
                {country.capital}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
