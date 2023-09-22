import {
  type TypeComputerSpecsData,
  type TypeClubTariff,
} from "~/entities/const/clubsContent.type";

export interface TypeTableProperties {
  priceData?: TypeClubTariff | null;
  specData?: TypeComputerSpecsData[][] | null;
  type: "price" | "computerSpecs";
}
