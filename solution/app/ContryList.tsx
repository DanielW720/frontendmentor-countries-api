"use client";

import React, { useState } from "react";
import { Country } from "./types/country";
import { CountryCard } from "./CountryCard";
import { Searchbar } from "./Searchbar";
import { FilterDropdown } from "./FilterDropdown";

export const CountryList = ({ countryList }: { countryList: Country[] }) => {
  const [countries, setCountries] = useState(countryList);

  const filterCountries = (region: string | null) => {
    if (!region) setCountries(countryList);
    else {
      const filteredCountries = countryList.filter(
        (country) => country.region === region || country.region === "Americas"
      );
      setCountries(filteredCountries);
    }
  };

  return (
    <>
      <div className="w-full lg:flex justify-center px-6">
        <div className="flex flex-col  md:flex-row md:items-center justify-between lg:w-[896px] xl:w-[1216px]">
          <Searchbar />
          <FilterDropdown filterCountries={filterCountries} />
        </div>
      </div>
      <article className="py-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-16 w-fit">
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </article>
    </>
  );
};
