import classNames from "classnames";
import { useSelector } from "react-redux";

import { selectMainMapData } from "~/store/content/content.selectors";

import Style from "./generalMap.module.scss";
import Styles from "../../pageSections.module.scss";

export const GeneralMap = () => {
  const map = useSelector(selectMainMapData);

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
        <iframe src={map.mainMap}></iframe>
      </div>
    </div>
  );
};
