import classNames from "classnames";

import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";

import Style from "./clubsDescr.module.scss";
import { ComputerSpecsClubs } from "./ComputerSpecs/ComputerSpecsClubs";
import { Price } from "./Price/Price";
import Styles from "../../pageSections.module.scss";
import { type ComputerSpecs } from "../ClubSec.util";

export const ClubsDescr = ({
  title,
  imgPrice,
  computerSpecs,
}: {
  title: string;
  imgPrice: string;
  computerSpecs: ComputerSpecs;
}) => {
  return (
    <>
      <div
        className={`${classNames({
          [Style.ClubsDescrSectionContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <Price title={title} img={imgPrice} />
        <NeonStrip color="yellow" />
        <ComputerSpecsClubs
          title={title}
          comf={computerSpecs.comfort}
          vip={computerSpecs.vip}
        />
        <NeonStrip color="yellow" />
      </div>
    </>
  );
};
