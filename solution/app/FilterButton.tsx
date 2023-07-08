export const FilterButton = ({
  hasSelectedRegion,
}: {
  hasSelectedRegion: boolean;
}) => {
  return (
    <div className="w-full mt-10 md:mt-0 shadow-mdSymmetric h-16 flex flex-row items-center justify-between px-6 dark:bg-darkBlue rounded-md">
      <p
        className={`${
          hasSelectedRegion && "text-blue-600 dark:text-blue-300"
        } font-semibold`}
      >
        Filter by Region
      </p>
      <span className="material-icons-outlined">arrow_drop_down</span>
    </div>
  );
};
