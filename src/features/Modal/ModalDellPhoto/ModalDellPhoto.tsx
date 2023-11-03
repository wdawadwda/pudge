import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { goBack } from "~/entities/utils/navigate.utils";
import { Button } from "~/shared/ui/Button/Buttons";
import { deleteGalleryDataById } from "~/store/api/galleryApi";
import { selectModalContent } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";
import { type ContentDell } from "~/store/modal/modal.type";

import Style from "../ModalDell/modalDell.module.scss";

export const ModalDellPhoto = () => {
  const content = useSelector(selectModalContent) as ContentDell;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    try {
      await deleteGalleryDataById(id);
      alert("Фото успешно удалено");
      goBack(navigate);
      dispatch(modalActions.toggleModal(null));
    } catch {
      alert("Ошибка при удалении фото");
    }
  };

  return (
    <div className={Style.modalDell}>
      <span
        className={Style.modalDell__title}
      >{`вы точно хотите удалить фото ${content.name}?`}</span>
      <Button
        appearance={"alert"}
        isFullWidth={false}
        onClick={() => {
          void handleDelete(content.id);
        }}
      >
        Удалить
      </Button>
    </div>
  );
};
