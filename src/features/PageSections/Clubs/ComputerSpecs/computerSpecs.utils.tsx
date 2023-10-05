import {
  type TypeClubComputerSpecs,
  type TypeComputerSpecsData,
} from "~/entities/const/content/clubsContent.type";
import { Table } from "~/features/Table/Table";

export function getActiveForm(
  activeTab: string,
  tabsName: string[],
  сomputerData: TypeClubComputerSpecs
) {
  switch (activeTab) {
    case tabsName[0]: {
      const data: TypeComputerSpecsData[][] = сomputerData.comfort;
      return <Table specData={data} type={"computerSpecs"} />;
    }

    case tabsName[1]: {
      const data: TypeComputerSpecsData[][] = сomputerData.vip;
      return <Table specData={data} type={"computerSpecs"} />;
    }
    case tabsName[2]: {
      const data: TypeComputerSpecsData[][] | undefined = сomputerData.bootcamp;
      return сomputerData.bootcamp ? (
        <Table specData={data} type={"computerSpecs"} />
      ) : null;
    }

    default: {
      return null;
    }
  }
}
