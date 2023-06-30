import Image from "next/image";
import { Country } from "../types/country";

export const CountryFlag = ({ flags }: { flags: Country["flags"] }) => {
  return (
    <div className="relative xs:w-[350px] xs:h-[240px] w-[250px] h-[140px] lg:w-[380px] lg:h-[340px]">
      <Image
        src={flags.png}
        alt={flags.alt}
        fill
        sizes="(max-width: 350px) 100vw"
        className="shadow-md"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkf71zFQAFIwJfy/HRLAAAAABJRU5ErkJggg=="
      />
    </div>
  );
};
