import { useDispatch, useSelector } from "react-redux";

import { type TypeClubContacts } from "~/entities/const/content/clubsContent.type";
import { Modal } from "~/features/Modal/Modal";
import { Button } from "~/shared/ui/Button/Buttons";
import { Expand } from "~/shared/ui/Expand/Expand";
import { selectIsShowModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";

import Style from "./bookClub.module.scss";

export const BookClub = ({
  data,
}: {
  data: { contacts: TypeClubContacts; name: string; id: number };
}) => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);

  return (
    <Expand titleExpand={`Забронировать`}>
      <div className={Style.regContainer}>
        <a href={`tel:${data.contacts.phone}`}>{data.contacts.phone}</a>
        <Button
          appearance={"primary"}
          isFullWidth={false}
          onClick={() => {
            dispatch(modalActions.setContent(data));
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
