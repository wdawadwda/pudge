export interface TypeClubPriceData {
  [tariff: string]: TypeClubTariff;
}

export type TypeClubTariff = {
  name: string;
  tariff: string;
  rows: string[][];
  description: string[][];
};

export interface TypeClubComputerSpecs {
  [tariff: string]: string;
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
  priceImg: string;
  priceData: TypeClubPriceData;
  computerSpecs: TypeClubComputerSpecs;
  quantityСomputers: TypeClubQuantityComputers;
}
