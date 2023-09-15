import classNames from "classnames";

import Style from "./generalMap.module.scss";
import Styles from "../../pageSections.module.scss";

export const GeneralMap = () => {
  return (
    <div
      className={`${classNames({
        [Style.MapContainer]: true,
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.MapContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <h2>Найти нас можете тут:</h2>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adfcdde640d03d40d4493de47d90ec36d2a41b8d0c5bbe1573ced7e3613e01030&amp;source=constructor"></iframe>
      </div>
    </div>
  );
};
