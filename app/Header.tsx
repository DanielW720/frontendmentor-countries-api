import React, { SetStateAction } from "react";

export const Header = ({
  darkTheme,
  setDarkTheme,
}: {
  darkTheme: boolean;
  setDarkTheme: (value: SetStateAction<boolean>) => void;
}) => {
  return (
    <header className="h-20 bg-white flex justify-between items-center shadow-md px-4">
      <h1 className="font-[800] text-lg">Where in the world?</h1>
      <button
        className="flex justify-center items-center"
        onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
      >
        <span
          className={`${
            darkTheme ? "material-icons" : "material-icons-outlined"
          } mr-2`}
        >
          dark_mode
        </span>
        <p className="font-[600] text-[14px]">
          {darkTheme ? "Light" : "Dark"} Mode
        </p>
      </button>
    </header>
  );
};
