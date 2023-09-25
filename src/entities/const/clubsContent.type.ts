export type TypeClubTariff = {
  name: string;
  tariff: string;
  rows: TypeClubPriceData[][];
  description: string[][];
};

export interface TypeClubPriceDataMap {
  comfort: TypeClubTariff;
  vip: TypeClubTariff;
  bootcamp?: TypeClubTariff;
}

export interface TypeClubPriceData {
  main: string;
  descr?: string;
}

export interface TypeComputerSpecsData {
  main: string;
  descr: string;
}

export interface TypeClubComputerSpecs {
  comfort: TypeComputerSpecsData[][];
  vip: TypeComputerSpecsData[][];
  bootcamp?: TypeComputerSpecsData[][];
}

export interface TypeClubQuantityComputers {
  comfort: number;
  vip: number;
  ps: number;
}

export interface TypeClubData {
  id: number;
  map: string;
  img: string;
  name: string;
  address: string;
  phone: string;
  priceData: TypeClubPriceDataMap;
  computerSpecs: TypeClubComputerSpecs;
  quantityСomputers: TypeClubQuantityComputers;
}
