export type Country = {
  flag: string;
  name: string;
  officialName: string;
};

export type CountryRaw = {
  flags: {
    png: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      ara: {
        official: string;
        common: string;
      };
    };
  };
};
