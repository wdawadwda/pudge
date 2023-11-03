import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { goBack } from "~/entities/utils/navigate.utils";
import { Button } from "~/shared/ui/Button/Buttons";
import { deleteNewsById } from "~/store/api/newsApi";
import { selectModalContent } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";
import { type ContentDellNews } from "~/store/modal/modal.type";

import Style from "../ModalDell/modalDell.module.scss";

export const ModalDellNews = () => {
  const content = useSelector(selectModalContent) as ContentDellNews;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    try {
      await deleteNewsById(id);
      alert("Новость успешна удалена");
      goBack(navigate);
      dispatch(modalActions.toggleModal(null));
    } catch {
      alert("Ошибка при удалении новости");
    }
  };

  return (
    <div className={Style.modalDell}>
      <span
        className={Style.modalDell__title}
      >{`вы точно хотите удалить новость ${content.name}?`}</span>
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
