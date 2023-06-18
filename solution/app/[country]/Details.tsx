import Image from "next/image";

export const Details = () => {
  return (
    <article className="grid grid-cols-1 gap-10 justify-items-center mt-16">
      <Image
        src="https://flagcdn.com/w320/be.png"
        alt="Country flag"
        width={350}
        height={240}
        className="shadow-md"
      />
      <div className="justify-self-start flex flex-col w-full">
        <h2 className="text-3xl font-bold">Belgium</h2>
        <ul className="my-6">
          <li className="my-2">
            <span className="font-semibold">Native Name: </span>België
          </li>
          <li className="my-2">
            <span className="font-semibold">Population: </span>11,319,511
          </li>
          <li className="my-2">
            <span className="font-semibold">Region: </span>Europe
          </li>
          <li className="my-2">
            <span className="font-semibold">Sub Region: </span>Western Europe
          </li>
          <li className="my-2">
            <span className="font-semibold">Capital: </span>Brussels
          </li>
        </ul>
        <ul>
          <li className="my-2">
            <span className="font-semibold">Top Level Domain: </span>.be
          </li>
          <li className="my-2">
            <span className="font-semibold">Currencies: </span>Euro
          </li>
          <li className="my-2">
            <span className="font-semibold">Languages: </span>Dutch, French,
            German
          </li>
        </ul>
        <div className="grid grid-cols-1 mt-6">
          <h3 className="text-xl font-semibold justify-self-start">
            Border Countries:
          </h3>
          <div className="grid grid-cols-2 justify-items-center gap-4 w-fit justify-self-center xs:grid-cols-3 mt-6">
            {["France", "Germany", "Netherlands"].map((country) => (
              <div
                key={country}
                className="py-2 shadow-lgSymmetric font-semibold w-24 flex justify-center items-center text-sm rounded-md dark:bg-darkBlue"
              >
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
