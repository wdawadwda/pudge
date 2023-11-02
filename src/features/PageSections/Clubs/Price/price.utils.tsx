import { type TypeClubPriceDataMap } from "~/entities/const/content/clubsContent.type";
import { Table } from "~/features/Table/Table";

export function getActiveForm(activeTab: string, data: TypeClubPriceDataMap) {
  switch (activeTab) {
    case "comfort": {
      return <Table priceData={data.comfort} type={"price"} />;
    }

    case "vip": {
      return <Table priceData={data.vip} type={"price"} />;
    }
    case "bootcamp": {
      return data.bootcamp ? (
        <Table priceData={data.bootcamp} type={"price"} />
      ) : null;
    }

    default: {
      return null;
    }
  }
}
