import Link from "next/link";

export const Backbutton = () => {
  return (
    <Link
      href={"/"}
      className="text-black w-32 px-2 dark:text-white flex justify-evenly py-2 bg-white dark:bg-darkBlue rounded-md shadow-lgSymmetric"
    >
      <span className="material-icons-outlined">west</span>
      <p>Back</p>
    </Link>
  );
};
