import {
  type SpecData,
  type TypeClubTariff,
} from "~/entities/const/content/clubsContent.type";

export interface TypeTableProperties {
  priceData?: TypeClubTariff | null;
  specData?: SpecData | null;
  type: "price" | "computerSpecs";
}
