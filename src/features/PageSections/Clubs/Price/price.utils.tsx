import { type TypeClubPriceDataMap } from "~/entities/const/content/clubsContent.type";
import { Table } from "~/features/Table/Table";

export function getActiveForm(
  activeTab: string,
  tabsName: string[],
  data: TypeClubPriceDataMap
) {
  switch (activeTab) {
    case tabsName[0]: {
      return <Table priceData={data.comfort} type={"price"} />;
    }

    case tabsName[1]: {
      return <Table priceData={data.vip} type={"price"} />;
    }
    case tabsName[2]: {
      return data.bootcamp ? (
        <Table priceData={data.bootcamp} type={"price"} />
      ) : null;
    }

    default: {
      return null;
    }
  }
}
