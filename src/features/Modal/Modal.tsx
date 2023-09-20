import { useDispatch, useSelector } from "react-redux";

import { selectIsShowModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";

import Style from "./modal.module.scss";
import { type ModalProperties } from "./modal.type";
import { ModalBook } from "./ModalBook/ModalBook";

export const Modal = ({ type }: ModalProperties) => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);

  const toggleModal = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <>
      {isShowModal && (
        <div className={Style.modal}>{type === "book" && <ModalBook />}</div>
      )}
      {isShowModal && <div className={Style.blur} onClick={toggleModal}></div>}
    </>
  );
};
