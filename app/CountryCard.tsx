import Image from "next/image";

export const CountryCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="shadow-md flex flex-col items-start justify-start rounded-lg dark:bg-darkBlue">
      <div className="relative w-[256px] h-[156px] p-0 m-0">
        <Image
          src={imageUrl}
          alt="Germany flag"
          fill
          style={{
            // objectFit: "contain",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      </div>
      <div className="mt-2 ml-6 mb-8">
        <h2 className="font-bold text-lg my-4">Germany</h2>
        <ul>
          <li className="my-1">
            <span className="font-semibold">Population:</span>{" "}
            <span className="dark:text-cardLightGrayText">{"81,770,900"}</span>
          </li>
          <li className="my-1">
            <span className="font-semibold">Region:</span>{" "}
            <span className="dark:text-cardLightGrayText">{"Europe"}</span>
          </li>
          <li className="my-1">
            <span className="font-semibold">Captiol:</span>{" "}
            <span className="dark:text-cardLightGrayText">{"Berlin"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
