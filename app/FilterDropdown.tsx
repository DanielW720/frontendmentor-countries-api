"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { Filter } from "./Filter";

export const FilterDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-[225px]">
        <Filter />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-[225px] ml-6 mt-2">
          <DropdownMenu.Group className="bg-white dark:bg-darkBlue w-full rounded-md p-4 shadow-mdSymmetric">
            {["Africa", "America", "Asia", "Europe", "Oceania"].map(
              (region) => (
                <DropdownMenu.Item>{region}</DropdownMenu.Item>
              )
            )}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
