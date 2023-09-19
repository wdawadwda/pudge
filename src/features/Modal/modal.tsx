import { useDispatch, useSelector } from "react-redux";

import { selectIsShowModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";

import Style from "./modal.module.scss";

export const Modal = () => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);

  const toggleModal = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <>
      {isShowModal && (
        <div className={Style.modal}>
          <div className={Style.content}>
            <button className={Style.closeButton} onClick={toggleModal}>
              Закрыть
            </button>
            <p>Дополнительный контент модального окна</p>
          </div>
        </div>
      )}
      {isShowModal && <div className={Style.blur} onClick={toggleModal}></div>}
    </>
  );
};
