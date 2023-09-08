import classNames from "classnames";

import { Expand } from "~/shared/ui/Expand/Expand";

import Style from "./computerSpecsClubs.module.scss";
import Styles from "../../../pageSections.module.scss";

export const ComputerSpecsClubs = ({
  title,
  comf,
  vip,
}: {
  title: string;
  comf: string;
  vip: string;
}) => {
  return (
    <>
      <div
        className={`${classNames({
          [Style.ComputerSpecsClubsContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <Expand titleExpand={`Железо ${title}`}>
          <img src={comf} alt="" />
          <img src={vip} alt="" />
        </Expand>
      </div>
    </>
  );
};
