import classNames from "classnames";

import { Expand } from "~/shared/ui/Expand/Expand";

import Style from "./location.module.scss";
import Styles from "../../pageSections.module.scss";

export const Location = ({ location }: { location: string }) => {
  return (
    <>
      <div
        className={`${classNames({
          [Style.LocationContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <Expand titleExpand={`Как нас найти`}>
          <iframe src={location}></iframe>
        </Expand>
      </div>
    </>
  );
};
