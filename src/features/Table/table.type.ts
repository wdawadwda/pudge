import { type TypeClubTariff } from "~/entities/const/clubsContent.type";

export interface TypeTableProperties {
  data: TypeClubTariff;
  type: "price" | "computerSpecs";
}
