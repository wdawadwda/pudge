import classNames from "classnames";

import { Expand } from "~/shared/ui/Expand/Expand";

import Style from "./price.module.scss";
import Styles from "../../pageSections.module.scss";

export const Price = ({ title, img }: { title: string; img: string }) => {
  return (
    <>
      <div
        className={`${classNames({
          [Style.PriceSectionContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <Expand titleExpand={`Цены ${title}`}>
          <img src={img} alt="" />
        </Expand>
      </div>
    </>
  );
};
