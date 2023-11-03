import { useEffect } from "react";

import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import Styles from "~/features/PageSections/pageSections.module.scss";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { Loader } from "~/pages/Loader/Loader";
import { links } from "~/router/Links";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";
import { getGalleryClubs } from "~/store/api/galleryApi";
import {
  selectGalleryName,
  selectGalleryStatus,
} from "~/store/gallery/gallery.selectors";
import { useAppDispatch } from "~/store/store.types";

import Style from "./galleryLayout.module.scss";

export const GalleryLayout = () => {
  const galleryName = useSelector(selectGalleryName);
  const dispatch = useAppDispatch();
  const status = useSelector(selectGalleryStatus);

  useEffect(() => {
    void dispatch(getGalleryClubs());
  }, [dispatch]);
  return (
    <>
      <div
        className={classNames({
          [Style.ClubsContainer]: true,
          [Styles.Container]: true,
        })}
      >
        <div
          className={classNames({
            [Style.ClubsSectionContent]: true,
            [Styles.Content]: true,
          })}
        >
          <h1>Галерея:</h1>
          <div className={Style.navClubs}>
            {status === "loading" ? (
              <>
                <div></div>
                <div className={Style.loaderWrapper}>
                  <Loader
                    loaderWidth="100%"
                    loaderHeight="100%"
                    dotSize="30px"
                    loaderMargin="0 0 77px 0"
                  />
                </div>
              </>
            ) : galleryName && galleryName.length > 0 ? (
              galleryName.map((name, index) => (
                <NavLink key={index} to={`${links.gallery}/${name}/1`}>
                  {name}
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
          <Outlet />
        </div>
      </div>
    </>
  );
};
