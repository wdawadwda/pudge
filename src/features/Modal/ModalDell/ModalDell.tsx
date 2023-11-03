import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { redirectTo } from "~/entities/utils/navigate.utils";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { deleteClub } from "~/store/api/contentApi";
import { selectModalContent } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";
import { type ContentDell } from "~/store/modal/modal.type";

import Style from "./modalDell.module.scss";

export const ModalDell = () => {
  const content = useSelector(selectModalContent) as ContentDell;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async (id: number) => {
    try {
      await deleteClub(id);
      alert("Клуб удален успешно, перезагрузите страницу");
      redirectTo(navigate, links.home);
      dispatch(modalActions.toggleModal(null));
    } catch {
      alert("Ошибка при удалении клуба");
    }
  };

  return (
    <div className={Style.modalDell}>
      <span
        className={Style.modalDell__title}
      >{`вы точно хотите удалить ${content.name}?`}</span>
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
