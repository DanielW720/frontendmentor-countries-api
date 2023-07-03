"use client";

import React, { useState } from "react";
import { Country } from "./types/country";
import { CountryCard } from "./CountryCard";
import { Searchbar } from "./Searchbar";
import { FilterDropdown } from "./FilterDropdown";

type Countries = {
  countries: Country[];
  region: Region;
  searchQuery: RegExp;
};

export type Region =
  | "Africa"
  | "America"
  | "Asia"
  | "Europe"
  | "Oceaniea"
  | "All";

const defaultSearchQuery = RegExp("", "i");

export const CountryList = ({ countryList }: { countryList: Country[] }) => {
  const [countries, setCountries] = useState<Countries>({
    countries: countryList,
    region: "All",
    searchQuery: defaultSearchQuery,
  });

  /**
   * Filter countries on a region keyword (exact match) and an optional search query.
   * @param region Region to apply filter on. Leaving out is the same as setting region to `All`.
   * @param query Query to filter results on
   */
  const filterCountries = ({
    region,
    query,
  }: {
    region?: Region;
    query?: RegExp;
  }) => {
    // Always iterate the full list of countries. Else, doing a second search would only search the previous list of search hits.
    const hits = countryList.filter((country) => {
      const currentName = country.name.common;
      const currentRegionOfCountry = country.region;

      // Check if there's a region hit
      let regionHit;
      if (region === "All") regionHit = true;
      else {
        regionHit = region
          ? currentRegionOfCountry === region
          : currentRegionOfCountry === countries.region;
      }

      // Check if there's a search hit
      const queryHit = query
        ? query.test(currentName)
        : countries.searchQuery.test(currentName);

      return regionHit && queryHit;
    });

    setCountries((prevState) => {
      return {
        countries: hits,
        region: region ? region : prevState.region,
        searchQuery: query ? query : prevState.searchQuery,
      };
    });
  };

  return (
    <>
      <div className="w-full lg:flex justify-center px-6">
        <div className="flex flex-col  md:flex-row md:items-center justify-between lg:w-[896px] xl:w-[1216px]">
          <Searchbar filterCountries={filterCountries} />
          <FilterDropdown
            filterCountries={filterCountries}
            region={countries.region}
          />
        </div>
      </div>
      <article className="py-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-16 w-fit">
          {countries.countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </article>
    </>
  );
};
