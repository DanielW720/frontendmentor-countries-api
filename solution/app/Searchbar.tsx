"use client";

import React from "react";
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
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    filterCountries({ query: new RegExp(data.query, "i") });

  return (
    <div className="w-full max-w-[26rem]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-mdSymmetric h-16 flex flex-row items-center justify-start dark:bg-darkBlue rounded-md"
      >
        <button type="submit">
          <span className="material-icons-outlined mx-6">search</span>
        </button>
        <input
          type="text"
          {...register("query")}
          placeholder="Search for a country..."
          className="bg-inherit outline-none overflow-hidden w-full text-blue-600 font-semibold dark:caret-white caret-black"
        />
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};
