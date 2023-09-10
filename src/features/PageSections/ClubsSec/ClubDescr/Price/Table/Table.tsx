import Style from "./table.module.scss";

export const Table = () => {
  return (
    <div className={Style.table}>
      <div className={Style.col}>
        <div className={Style.row}>Тарифы</div>
        <div className={Style.row}>1 ЧАС</div>
        <div className={Style.row}>НОЧЬ</div>
        <div className={Style.row}>НОЧЬ +</div>
      </div>
      <div className={Style.col}>
        <div className={Style.row}>COMFORT</div>
        <div className={Style.row}>
          <div>
            <div className={Style.rowCont}>3</div>
            <div className={Style.rowDesc}>до 16:00</div>
          </div>
          <div>
            <div className={Style.rowCont}>4</div>
            <div className={Style.rowDesc}>поле 16:00</div>
          </div>
        </div>
        <div className={Style.row}>
          <div>
            <div className={Style.rowCont}>3</div>
            <div className={Style.rowDesc}>до 16:00</div>
          </div>
          <div>
            <div className={Style.rowCont}>4</div>
            <div className={Style.rowDesc}>поле 16:00</div>
          </div>
        </div>
        <div className={Style.row}>
          <div>
            <div className={Style.rowCont}>20</div>
            <div className={Style.rowDesc}>пн-пт</div>
          </div>
        </div>
      </div>
      <div className={Style.col}></div>
      <div className={Style.col}></div>
    </div>
  );
};
