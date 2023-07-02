"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FilterButton } from "./FilterButton";
import { useState } from "react";
import { Region } from "./CountryList";

export const FilterDropdown = ({
  filterCountries,
  region,
}: {
  filterCountries: ({
    region,
    query,
  }: {
    region?: Region | undefined;
    query?: RegExp | undefined;
  }) => void;
  region: Region;
}) => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(region);

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className="w-[225px]">
        <FilterButton hasSelectedRegion={selectedRegion !== "All"} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-[225px] mt-2">
          <DropdownMenu.Group className="bg-white dark:bg-darkBlue w-full rounded-md p-4 shadow-mdSymmetric">
            {["Africa", "America", "Asia", "Europe", "Oceania"].map(
              (region) => (
                <DropdownMenu.Item
                  key={region}
                  className={`cursor-pointer w-fit font-semibold my-2 ${
                    region === selectedRegion && "text-blue-600"
                  }`}
                  onClick={() => {
                    if (region === selectedRegion) {
                      filterCountries({ region: "All" });
                      setSelectedRegion("All");
                    } else {
                      setSelectedRegion(region as Region);
                      filterCountries({
                        region:
                          region === "America"
                            ? ("Americas" as Region)
                            : (region as Region),
                      });
                    }
                  }}
                >
                  {region}
                </DropdownMenu.Item>
              )
            )}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
