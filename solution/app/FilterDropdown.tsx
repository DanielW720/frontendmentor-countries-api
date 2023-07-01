"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FilterButton } from "./FilterButton";
import { useState } from "react";

export const FilterDropdown = ({
  filterCountries,
}: {
  filterCountries: (region: string | null) => void;
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className="w-[225px]">
        <FilterButton />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-[225px] mt-2">
          <DropdownMenu.Group className="bg-white dark:bg-darkBlue w-full rounded-md p-4 shadow-mdSymmetric">
            {["Africa", "America", "Asia", "Europe", "Oceania"].map(
              (region) => (
                <DropdownMenu.Item
                  key={region}
                  className={`cursor-pointer w-fit font-semibold my-2 ${
                    region === selectedRegion && "text-blue-400"
                  }`}
                  onClick={() => {
                    if (region === selectedRegion) {
                      filterCountries(null);
                      setSelectedRegion(null);
                    } else {
                      filterCountries(region);
                      setSelectedRegion(region);
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
