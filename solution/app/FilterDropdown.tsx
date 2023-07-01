"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FilterButton } from "./FilterButton";
import { useState } from "react";

export const FilterDropdown = ({
  filterCountries,
}: {
  filterCountries: (region: string) => void;
}) => {
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
                  className="font-semibold my-1"
                  onClick={() => filterCountries(region)}
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
