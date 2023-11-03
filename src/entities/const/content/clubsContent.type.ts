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

export interface SpecData {
  tariff: string;
  content: TypeComputerSpecsData[] | null;
}

export interface SpecData2 {
  tariff: string;
  content: TypeComputerSpecsData[];
}

export interface TypeClubComputerSpecs {
  comfort?: SpecData;
  vip?: SpecData;
  bootcamp?: SpecData;
}

export interface TypeClubQuantityComputers {
  comfort: number;
  vip: number;
  bootcamp: number;
  ps: number;
}

export interface TypeClubContacts {
  address: string;
  phone: string;
  instagram: string;
  email: string;
}

export interface TypeClubData {
  id: number;
  map: string;
  img: string;
  name: string;
  contacts: TypeClubContacts;
  price: TypeClubPriceDataMap;
  computerSpecs: TypeClubComputerSpecs;
  quantityComputers: TypeClubQuantityComputers;
}

export interface ComputerSpecData {
  tariff: string;
  content: Array<{
    main: string;
    descr: string;
  }>;
}

export type TariffType = "vip" | "comfort" | "bootcamp";

export interface ClubRequest {
  name: string;
  map: string;
  img: File;
}

export interface ContactsRequest {
  contacts: {
    name: string;
    address: string;
    phone: string;
    instagram: string;
    email: string;
  };
}

export type PriceRequest = {
  price: {
    name: string;
  } & {
    [key: string]: {
      tariff: string;
      rows: {
        main: string;
        descr?: string | undefined;
      }[][];
      description: string[][];
    };
  };
};

export interface ComputerSpecsRequest {
  computerSpecs: {
    name: string;
  } & {
    [key: string]: {
      tariff: string;
      content: {
        main: string;
        descr: string;
      }[][];
    };
  };
}

export interface QuantityComputersRequest {
  quantityComputers: {
    name: string;
    comfort: string;
    vip: string;
    bootcamp: string;
    ps: string;
  };
}

export type ClubRequestType =
  | ClubRequest
  | ContactsRequest
  | PriceRequest
  | ComputerSpecsRequest
  | QuantityComputersRequest;

export interface MainMapRequest {
  mainMap: string;
}
