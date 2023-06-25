"use client";

import Image from "next/image";
import Link from "next/link";

export const CountryCard = ({ imageUrl }: { imageUrl: string }) => {
  const country = "Germany";

  return (
    <Link href={`/${country}`}>
      <div className="shadow-mdSymmetric flex flex-col items-start justify-start rounded-lg dark:bg-darkBlue h-[340px] w-[256px]">
        <div className="relative w-full h-[160px]">
          <Image
            src={imageUrl}
            alt="Germany flag"
            fill
            sizes="(max-width: 340px) 100vw"
            className="rounded-t-lg"
          />
        </div>
        <div className="mt-2 ml-6 mb-8">
          <h2 className="font-bold text-lg my-4">Germany</h2>
          <ul>
            <li className="my-1">
              <span className="font-semibold">Population: </span>
              <span className="dark:text-cardLightGrayText">
                {"81,770,900"}
              </span>
            </li>
            <li className="my-1">
              <span className="font-semibold">Region: </span>
              <span className="dark:text-cardLightGrayText">{"Europe"}</span>
            </li>
            <li className="my-1">
              <span className="font-semibold">Captiol: </span>
              <span className="dark:text-cardLightGrayText">{"Berlin"}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
