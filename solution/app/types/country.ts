export type Country = {
  flags: {
    png: string;
    alt: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tkd: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
};
