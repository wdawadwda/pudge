import { PriceTable } from "./PriceTable/PriceTable";
import Style from "./table.module.scss";
import { type TypeTableProperties } from "./table.type";

export const Table = ({ data, type }: TypeTableProperties) => {
  return (
    <div className={Style.TableContainer}>
      <div className={Style.TableContent}>
        {type === "price" && <PriceTable priceData={data} />}
      </div>
    </div>
  );
};
