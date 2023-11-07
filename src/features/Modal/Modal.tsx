import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectIsShowModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";

import Style from "./modal.module.scss";
import { type ModalProperties } from "./modal.type";
import { ModalBook } from "./ModalBook/ModalBook";
import { ModalDell } from "./ModalDell/ModalDell";
import { ModalDellNews } from "./ModalDellNews/ModalDellNews";
import { ModalDellPhoto } from "./ModalDellPhoto/ModalDellPhoto";
import { ModalPhotoSlider } from "./ModalPhotoSlider/ModalPhotoSlider";

export const Modal = ({ type }: ModalProperties) => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    dispatch(modalActions.toggleModal(null));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isShowModal && (
        <div
          className={type === "photoSlider" ? Style.modalPhoto : Style.modal}
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {type === "book" && <ModalBook />}
          {type === "dellClub" && <ModalDell />}
          {type === "dellPhoto" && <ModalDellPhoto />}
          {type === "dellNews" && <ModalDellNews />}
          {type === "photoSlider" && <ModalPhotoSlider />}
        </div>
      )}
      {isShowModal && <div className={Style.blur} onClick={toggleModal}></div>}
    </>
  );
};
