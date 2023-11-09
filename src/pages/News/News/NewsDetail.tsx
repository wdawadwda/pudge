import { useEffect, useState } from "react";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { goBack } from "~/entities/utils/navigate.utils";
import { Modal } from "~/features/Modal/Modal";
import Styles from "~/features/PageSections/pageSections.module.scss";
import StylesGallery from "~/pages/Gallery/GalleryDetail/galleryDetail.module.scss";
import { Button } from "~/shared/ui/Button/Buttons";
import { getNewsDataById } from "~/store/api/newsApi";
import { selectIsShowModal, selectModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";
import { type NewsData } from "~/store/news/news.types";
import { selectUser } from "~/store/user/user.selectors";

import Style from "./newsDetail.module.scss";

export const NewsDetail = () => {
  const { id } = useParams();
  const user = useSelector(selectUser);
  const isShowModal = useSelector(selectIsShowModal);
  const modal = useSelector(selectModal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newsItem, setNews] = useState<NewsData | null>(null);

  useEffect(() => {
    async function fetchNewsData() {
      if (id) {
        try {
          const response = await getNewsDataById(Number.parseInt(id, 10));
          setNews(response);
        } catch (error) {
          console.error("Ошибка при загрузке данных фотографии:", error);
        }
      }
    }
    void fetchNewsData();
  }, [id]);

  return (
    <div
      className={classNames({
        [StylesGallery.GalleryContainer]: true,
        [Styles.Container]: true,
      })}
    >
      <div
        className={classNames({
          [StylesGallery.GalleryContent]: true,
          [Styles.Content]: true,
        })}
      >
        <Button appearance="secondary" onClick={() => goBack(navigate)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        {newsItem ? (
          <>
            <span className={Style.title}>{newsItem.title}</span>
            {user && user.is_staff === true ? (
              <Button
                appearance={"primary"}
                isFullWidth={true}
                style={{ marginBottom: "50px" }}
                onClick={() => {
                  dispatch(
                    modalActions.setContent({
                      id: newsItem.id,
                      name: newsItem.title,
                    })
                  );
                  dispatch(modalActions.toggleModal("dellNews"));
                }}
              >
                Удалить
              </Button>
            ) : null}
            <div className={Style.contentWrapper}>
              <div
                className={`${Style.img} ${StylesGallery.GalleryContent__imgWrapper}`}
              >
                {newsItem.img != null && <img src={newsItem.img} />}
              </div>
              <p className={`${Style.text} ${Style.text1}`}>{newsItem.text1}</p>
              <p className={`${Style.text} ${Style.text2}`}>{newsItem.text2}</p>
              <p className={`${Style.text} ${Style.text3}`}>{newsItem.text3}</p>
            </div>
          </>
        ) : (
          <div className={StylesGallery.GalleryContent__404}>
            Фото не найдено
          </div>
        )}
      </div>
      {isShowModal && modal.modalType !== null && (
        <Modal type={modal.modalType} />
      )}
    </div>
  );
};
