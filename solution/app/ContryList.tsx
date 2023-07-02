"use client";

import React, { useState } from "react";
import { Country } from "./types/country";
import { CountryCard } from "./CountryCard";
import { Searchbar } from "./Searchbar";
import { FilterDropdown } from "./FilterDropdown";

export const CountryList = ({ countryList }: { countryList: Country[] }) => {
  const [countries, setCountries] = useState<Country[]>(countryList);
  const [region, setRegion] = useState<string | null>(null);
  const commonNames = countries.map((country) => country.name.common);

  /**
   * Filter countries on a region keyword (exact match).
   * @param region Region to apply filter on
   */
  const filterCountries = (region: string | null) => {
    if (!region) setCountries(countryList);
    else {
      const filteredCountries = countryList.filter(
        (country) => country.region === region
      );
      setCountries(filteredCountries);
    }
    setRegion(region);
  };

  /**
   * Search countries on their common names.
   * @param query The search query
   */
  const searchCountries = (query: string) => {
    var re = new RegExp(query, "i");
    // Always search through the full list of countries. Else, doing a second search would only search the previous list of search hits. The region filter should still apply however.
    const hits = countryList.filter((country) => {
      const name = country.name.common;
      if (!region) return re.test(name);
      return region === country.region && re.test(name);
    });
    setCountries(hits);
  };

  return (
    <>
      <div className="w-full lg:flex justify-center px-6">
        <div className="flex flex-col  md:flex-row md:items-center justify-between lg:w-[896px] xl:w-[1216px]">
          <Searchbar searchCountries={searchCountries} />
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
