import classNames from "classnames";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";
import { selectClubDataResults } from "~/store/content/content.selectors";

import { BookClub } from "./BookClub/BookClub";
import Style from "./clubsLayouts.module.scss";
import { ComputerSpecsClubs } from "./ComputerSpecs/ComputerSpecsClubs";
import { Location } from "./Location/Location";
import { Price } from "./Price/Price";
import Styles from "../pageSections.module.scss";

export const ClubsDetail = () => {
  const { id } = useParams();

  const clubId = id ? Number.parseInt(id) : undefined;
  const clubData = useSelector(selectClubDataResults);
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
          <div className={Style.selectedClub}>
            <h2 className={Style.title}>{`${selectedClub.name}:`}</h2>
            <BookClub
              data={{
                contacts: selectedClub.contacts,
                name: selectedClub.name,
                id: selectedClub.id,
              }}
            />
            <NeonStrip color="yellow" marginBottom="50px" />
            <Price title={selectedClub.name} data={selectedClub.price} />
            <NeonStrip color="yellow" marginBottom="50px" />
            <Location location={selectedClub.map} />
            <NeonStrip color="yellow" marginBottom="50px" />
            <ComputerSpecsClubs
              title={selectedClub.name}
              сomputerData={selectedClub.computerSpecs}
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
