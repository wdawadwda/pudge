import {
  type SpecData,
  type TypeClubComputerSpecs,
} from "~/entities/const/content/clubsContent.type";
import { Table } from "~/features/Table/Table";

export function getActiveForm(
  activeTab: string,
  сomputerData: TypeClubComputerSpecs
) {
  switch (activeTab) {
    case "comfort": {
      const data: SpecData | undefined = сomputerData.comfort;
      return <Table specData={data} type={"computerSpecs"} />;
    }

    case "vip": {
      const data: SpecData | undefined = сomputerData.vip;
      return <Table specData={data} type={"computerSpecs"} />;
    }
    case "bootcamp": {
      const data: SpecData | undefined = сomputerData.bootcamp;
      return сomputerData.bootcamp ? (
        <Table specData={data} type={"computerSpecs"} />
      ) : null;
    }

    default: {
      return null;
    }
  }
}
