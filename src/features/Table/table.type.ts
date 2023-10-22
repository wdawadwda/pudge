import {
  type TypeClubTariff,
  type TypeComputerSpecsData,
} from "~/entities/const/content/clubsContent.type";

export interface TypeTableProperties {
  priceData?: TypeClubTariff | null;
  specData?: TypeComputerSpecsData[][] | null;
  type: "price" | "computerSpecs";
}
