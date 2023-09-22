import { type TypeClubPriceData } from "~/entities/const/clubsContent.type";
import { Table } from "~/features/Table/Table";

export function getActiveForm(
  activeTab: string,
  tabsName: string[],
  data: TypeClubPriceData
) {
  switch (activeTab) {
    case tabsName[0]: {
      return <Table data={data.comfort} type={"price"} />;
    }

    case tabsName[1]: {
      return <Table data={data.vip} type={"price"} />;
    }
    case tabsName[2]: {
      return <Table data={data.bootcamp} type={"price"} />;
    }

    default: {
      return null;
    }
  }
}
