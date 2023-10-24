import { useSelector } from "react-redux";

import { Button } from "~/shared/ui/Button/Buttons";
import { deleteClub } from "~/store/api/contentApi";
import { selectModalContent } from "~/store/modal/modal.selectors";
import { type ContentDell } from "~/store/modal/modal.type";

import Style from "./modalDell.module.scss";

const handleDelete = async (id: number) => {
  try {
    await deleteClub(id);
    alert("Клуб удален успешно, перезагрузите страницу");
  } catch {
    alert("Ошибка при удалении клуба");
  }
};
export const ModalDell = () => {
  const content = useSelector(selectModalContent) as ContentDell;

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
