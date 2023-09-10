import classNames from "classnames";

import Style from "./location.module.scss";
import Styles from "../../../pageSections.module.scss";

export const Location = ({ location }: { location: string }) => {
  return (
    <>
      <div
        className={`${classNames({
          [Style.LocationContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <iframe src={location}></iframe>
      </div>
    </>
  );
};
