import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import Styles from "~/features/PageSections/pageSections.module.scss";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { links } from "~/router/Links";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";
import { selectClubDataResults } from "~/store/content/content.selectors";

import Style from "./clubsLayouts.module.scss";

export const ClubsLayout = () => {
  const clubData = useSelector(selectClubDataResults);
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
            {clubData && clubData.length > 0 ? (
              clubData.map((club) => (
                <NavLink
                  key={club.id}
                  to={`${links.clubs}/${club.id}`}
                  state={{ clubData: club }}
                >
                  {club.name}
                </NavLink>
              ))
            ) : (
              <>
                <div></div>
                <ServerResponse message={""} error={"Кажется тут пусто"} />
              </>
            )}
          </div>
          <NeonStrip color={"green"} />
        </div>
      </div>
      <Outlet />
    </>
  );
};
