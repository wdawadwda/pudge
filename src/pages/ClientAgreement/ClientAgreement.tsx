import classNames from "classnames";

import Styles from "~/features/PageSections/pageSections.module.scss";

import Style from "./clientAgr.module.scss";

export const ClientAgreement = () => {
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
