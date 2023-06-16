import React from "react";

export const Searchbar = () => {
  return (
    <div className="w-full px-6">
      <div className="shadow-mdSymmetric h-16 flex flex-row items-center justify-start dark:bg-darkBlue rounded-md">
        <span className="material-icons-outlined mx-6">search</span>
        <input
          type="text"
          placeholder="Search for a country..."
          className="bg-inherit"
        />
      </div>
    </div>
  );
};
