import classNames from "classnames";
import { useParams } from "react-router-dom";

import { clubData } from "~/entities/const/clubsContent.const";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";

import Style from "./clubsLayouts.module.scss";
import { ComputerSpecsClubs } from "./ComputerSpecs/ComputerSpecsClubs";
import { Location } from "./Location/Location";
import { Price } from "./Price/Price";
import Styles from "../pageSections.module.scss";

export const ClubsDetail = () => {
  const { id } = useParams();

  const clubId = id ? Number.parseInt(id) : undefined;
  const selectedClub = clubData.find((club) => club.id === clubId);

  return (
    <div
      className={`${classNames({
        [Style.ClubsDetailContainer]: true,
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.ClubsDetailContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        {selectedClub ? (
          <div>
            <h2>{`${selectedClub.name}:`}</h2>
            <Price
              title={selectedClub.name}
              data={selectedClub.priceData} /*img={selectedClub.priceImg}*/
            />
            <NeonStrip color="yellow" marginBottom="50px" />
            <Location location={selectedClub.map} />
            <NeonStrip color="yellow" marginBottom="50px" />
            <ComputerSpecsClubs
              title={selectedClub.name}
              comf={selectedClub.computerSpecs.comfort}
              vip={selectedClub.computerSpecs.vip}
            />
            <NeonStrip color="yellow" />
          </div>
        ) : (
          <h2>Выберите клуб</h2>
        )}
      </div>
    </div>
  );
};
