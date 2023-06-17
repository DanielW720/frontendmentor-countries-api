"use client";

import React from "react";
import * as RadixPopover from "@radix-ui/react-popover";

export const Popover = () => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger>More info</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content>
          Some more info…
          <RadixPopover.Arrow />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};
