import { useEffect, useState } from "react";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { goBack } from "~/entities/utils/navigate.utils";
import { Modal } from "~/features/Modal/Modal";
import Styles from "~/features/PageSections/pageSections.module.scss";
import { Button } from "~/shared/ui/Button/Buttons";
import { getGalleryDataById } from "~/store/api/galleryApi";
import { selectIsShowModal, selectModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";
import { selectUser } from "~/store/user/user.selectors";

import Style from "./galleryDetail.module.scss";

export const GalleryDetail = () => {
  const { id } = useParams();
  const user = useSelector(selectUser);
  const isShowModal = useSelector(selectIsShowModal);
  const modal = useSelector(selectModal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState<{
    id: number;
    id_object: number;
    text: string;
    img: string | null;
  } | null>(null);

  useEffect(() => {
    async function fetchImageData() {
      if (id) {
        try {
          const response = await getGalleryDataById(Number.parseInt(id, 10));
          setImage(response);
        } catch (error) {
          console.error("Ошибка при загрузке данных фотографии:", error);
        }
      }
    }

    void fetchImageData();
  }, [id]);

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
        })}
      >
        <Button appearance="secondary" onClick={() => goBack(navigate)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        {image ? (
          <>
            <span>{image.text}</span>
            {user && user.is_staff === true ? (
              <Button
                appearance={"primary"}
                isFullWidth={true}
                style={{ marginBottom: "50px" }}
                onClick={() => {
                  dispatch(
                    modalActions.setContent({
                      id: image.id_object,
                      name: image.text,
                    })
                  );
                  dispatch(modalActions.toggleModal("dellPhoto"));
                }}
              >
                Удалить
              </Button>
            ) : null}
            <div className={Style.GalleryContent__imgWrapper}>
              {image.img != null && <img src={image.img} alt={image.text} />}
            </div>
          </>
        ) : (
          <div className={Style.GalleryContent__404}>Фото не найдено</div>
        )}
      </div>
      {isShowModal && modal.modalType !== null && (
        <Modal type={modal.modalType} />
      )}
    </div>
  );
};
