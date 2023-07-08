"use client";

import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Region } from "./CountryList";

type Inputs = {
  query: string;
};

export const Searchbar = ({
  filterCountries,
}: {
  filterCountries: ({
    region,
    query,
  }: {
    region?: Region | undefined;
    query?: RegExp | undefined;
  }) => void;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => filterAndSearch(data.query);

  useEffect(() => {
    const timer = setTimeout(() => {
      const query = watch("query");
      filterAndSearch(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [watch("query")]);

  function filterAndSearch(query: string) {
    filterCountries({ query: new RegExp(query, "i") });
  }

  return (
    <div className="w-full max-w-[26rem]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="shadow-mdSymmetric h-16 flex flex-row items-center justify-start dark:bg-darkBlue rounded-md"
      >
        <button type="submit">
          <span className="material-icons-outlined mx-6 mt-2">search</span>
        </button>

        <input
          type="text"
          {...register("query")}
          placeholder="Search for a country..."
          className="bg-inherit outline-none overflow-hidden w-full tracking-wide text-blue-600 dark:text-blue-300 font-semibold dark:caret-white caret-black appearance-none"
        />
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};
