import { useEffect } from "react";

import classNames from "classnames";
import { useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";

import { GALLERY_PER_PAGE } from "~/entities/const/api.const";
import {
  calculateTotalPages,
  getCurrentPage,
} from "~/entities/utils/paginations.utils";
import { Modal } from "~/features/Modal/Modal";
import Styles from "~/features/PageSections/pageSections.module.scss";
import { Pagination } from "~/features/Paginations/Pagination";
import { links } from "~/router/Links";
import { getGalleryData } from "~/store/api/galleryApi";
import {
  galleryTotalPhoto,
  selectGalleryData,
  selectGalleryStatus,
} from "~/store/gallery/gallery.selectors";
import { type GalleryItem } from "~/store/gallery/gallery.types";
import { selectIsShowModal, selectModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";
import { useAppDispatch } from "~/store/store.types";
import { selectUser } from "~/store/user/user.selectors";

import Style from "./gallery.module.scss";
import { Loader } from "../Loader/Loader";

export const Gallery = () => {
  const { name, page } = useParams();
  const dispatch = useAppDispatch();
  const galleryData = useSelector(selectGalleryData);
  const totalPhoto = useSelector(galleryTotalPhoto);
  const status = useSelector(selectGalleryStatus);
  const [searchParameters, setSearchParameters] = useSearchParams();
  const modal = useSelector(selectModal);
  const isShowModal = useSelector(selectIsShowModal);
  const user = useSelector(selectUser);

  const imgData: GalleryItem[] = galleryData[name ?? ""] || [];

  const clubTotalPhoto = Array.isArray(totalPhoto)
    ? totalPhoto.find((club) => club.name === name)
    : undefined;

  const quantityPictures = clubTotalPhoto?.quantityPictures
    ? Number(clubTotalPhoto.quantityPictures)
    : 0;

  const totalPages = calculateTotalPages(quantityPictures, GALLERY_PER_PAGE);

  const currentPage = page
    ? +page < 1
      ? 1
      : +page > totalPages
      ? totalPages
      : +page
    : getCurrentPage(searchParameters, totalPages);

  useEffect(() => {
    if (name) {
      void dispatch(
        getGalleryData({
          page: currentPage,
          clubName: name,
          perPage: GALLERY_PER_PAGE,
        })
      );
    }
  }, [currentPage, dispatch, name]);

  return (
    <div
      className={classNames({
        [Style.GalleryContainer]: true,
        [Styles.Container]: true,
      })}
    >
      <div
        className={classNames({
          [Style.GalleryContent]: true,
          [Styles.Content]: true,
          [Style.LoadingContainer]: status === "loading",
        })}
      >
        {status === "loading" ? (
          <Loader
            loaderWidth="100%"
            loaderHeight="100%"
            dotSize="30px"
            loaderMargin="0 0 77px 0"
          />
        ) : (
          imgData.map((image) =>
            user && user.is_staff === true ? (
              <div key={image.id}>
                <Link
                  to={
                    name
                      ? `${links.gallery}/${name}/${currentPage}/${image.id}`
                      : `/404`
                  }
                  key={image.id}
                  className={Style.TilesContent__cell}
                >
                  <img src={image.img} />
                </Link>
              </div>
            ) : (
              <>
                <div>
                  <img
                    src={image.img}
                    onClick={() => {
                      const imageIndex = imgData.findIndex(
                        (item) => item.id === image.id
                      );
                      dispatch(
                        modalActions.setContent({
                          index: imageIndex,
                          data: imgData,
                        })
                      );
                      dispatch(modalActions.toggleModal("photoSlider"));
                    }}
                  />
                </div>
              </>
            )
          )
        )}
      </div>
      {name && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl={`${links.gallery}/${name}`}
          onPageChange={(nextPage) => {
            setSearchParameters((old) => {
              old.set("page", `${nextPage}`);
              return old;
            });
          }}
        />
      )}
      {isShowModal && modal.modalType !== null && (
        <Modal type={modal.modalType} />
      )}
    </div>
  );
};
