import classNames from "classnames";

import Style from "./clientAgr.module.scss";
import Styles from "../pageSections.module.scss";

export const ClientAgr = () => {
  return (
    <div
      className={`${classNames({
        [Style.clientAgrContainer]: true,
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.clientAgrContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <h1>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ:</h1>
        <div className={Style.info}></div>
      </div>
    </div>
  );
};
