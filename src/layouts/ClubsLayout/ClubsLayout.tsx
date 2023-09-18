import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { clubData } from "~/entities/const/clubsContent.const";
import { ClubsDetail } from "~/features/PageSections/Clubs/ClubsDetail";
import Styles from "~/features/PageSections/pageSections.module.scss";
import { links } from "~/router/Links";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";

import Style from "./clubsLayouts.module.scss";

export const ClubsLayout = () => {
  return (
    <>
      <div
        className={`${classNames({
          [Style.ClubsContainer]: true,
          [Styles.Container]: true,
        })}`}
      >
        <div
          className={`${classNames({
            [Style.ClubsSectionContent]: true,
            [Styles.Content]: true,
          })}`}
        >
          <h1>НАШИ КЛУБЫ:</h1>
          <div className={Style.navClubs}>
            {clubData.map((club) => (
              <NavLink
                key={club.id}
                to={`${links.clubs}/${club.id}`}
                state={{ clubData: club }}
              >
                {club.name}
              </NavLink>
            ))}
          </div>
          <NeonStrip color={"green"} />
        </div>
      </div>
      <ClubsDetail />
    </>
  );
};
