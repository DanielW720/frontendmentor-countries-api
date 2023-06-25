import Image from "next/image";

export const CountryFlag = () => {
  return (
    <div className="relative w-[350px] h-[240px]">
      <Image
        src="https://flagcdn.com/w320/be.png"
        alt="Country flag"
        fill
        sizes="(max-width: 350px) 100vw"
        className="shadow-md"
      />
    </div>
  );
};
