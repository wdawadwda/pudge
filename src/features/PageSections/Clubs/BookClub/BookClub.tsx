import { useDispatch, useSelector } from "react-redux";

import { Modal } from "~/features/Modal/Modal";
import { Button } from "~/shared/ui/Button/Buttons";
import { Expand } from "~/shared/ui/Expand/Expand";
import { selectIsShowModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";

import Style from "./bookClub.module.scss";
import { type ContactsProperties } from "./bookClub.type";

export const BookClub = ({ contacts }: ContactsProperties) => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);

  return (
    <Expand titleExpand={`Забронировать`}>
      <div className={Style.regContainer}>
        <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
        <Button
          appearance={"primary"}
          isFullWidth={false}
          onClick={() => {
            dispatch(modalActions.setContent(contacts));
            dispatch(modalActions.toggleModal("book"));
          }}
        >
          Забронировать
        </Button>
      </div>
      {isShowModal && <Modal type={"book"} />}
    </Expand>
  );
};
