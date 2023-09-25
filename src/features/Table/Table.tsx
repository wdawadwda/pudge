import { ComputerSpec } from "./ComputerSpec/ComputerSpec";
import { PriceTable } from "./PriceTable/PriceTable";
import Style from "./table.module.scss";
import { type TypeTableProperties } from "./table.type";
import Styles from "./tableTwo.module.scss";

export const Table = ({
  priceData = null,
  specData = null,
  type,
}: TypeTableProperties) => {
  return (
    <div className={Style.TableContainer}>
      {type === "price" && priceData !== null && (
        <div className={Style.TableContent}>
          <PriceTable priceData={priceData} />
        </div>
      )}
      {type === "computerSpecs" && specData !== null && (
        <div className={Styles.TableSpecContent}>
          <ComputerSpec specData={specData} />
        </div>
      )}
    </div>
  );
};
