"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  query: string;
};

export const Searchbar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-full px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-mdSymmetric h-16 flex flex-row items-center justify-start dark:bg-darkBlue rounded-md"
      >
        <span className="material-icons-outlined mx-6">search</span>
        <input
          type="text"
          {...register("query")}
          placeholder="Search for a country..."
          className="bg-inherit outline-none"
        />
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};
