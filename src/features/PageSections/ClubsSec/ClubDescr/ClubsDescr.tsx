import classNames from "classnames";

import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";

import Style from "./clubsDescr.module.scss";
import { ComputerSpecsClubs } from "./ComputerSpecs/ComputerSpecsClubs";
import { Location } from "./Location/Location";
import { Price } from "./Price/Price";
import { type TypeClubData } from "../../ClubSlider/sliderContent.const";
import Styles from "../../pageSections.module.scss";

export const ClubsDescr = ({ data }: { data: TypeClubData }) => {
  return (
    <>
      <div
        className={`${classNames({
          [Style.ClubsDescrSectionContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <NeonStrip color="yellow" />
        <Location location={data.map} />
        <NeonStrip color="yellow" />
        <Price title={data.name} img={data.priceImg} />
        <NeonStrip color="yellow" />
        <ComputerSpecsClubs
          title={data.name}
          comf={data.computerSpecs.comfort}
          vip={data.computerSpecs.vip}
        />
        <NeonStrip color="yellow" />
      </div>
    </>
  );
};
