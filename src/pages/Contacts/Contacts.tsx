import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as Iinstagram } from "~/assets/social/instagram.svg";
import { Modal } from "~/features/Modal/Modal";
import Styles from "~/features/PageSections/pageSections.module.scss";
import { Button } from "~/shared/ui/Button/Buttons";
import { Expand } from "~/shared/ui/Expand/Expand";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";
import { selectClubDataResults } from "~/store/content/content.selectors";
import { selectIsShowModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";

import Style from "./contacts.module.scss";

export const Contacts = () => {
  const dispatch = useDispatch();
  const clubData = useSelector(selectClubDataResults);
  const isShowModal = useSelector(selectIsShowModal);

  return (
    <>
      <div
        className={`${classNames({
          [Style.ContactsSecContainer]: true,
          [Styles.Container]: true,
        })}`}
      >
        <div
          className={`${classNames({
            [Style.ContactsSecContent]: true,
            [Styles.Content]: true,
          })}`}
        >
          <h2>Наши контакты:</h2>
          {clubData.map((selectClub, index) => (
            <div key={index}>
              <Expand titleExpand={`Контакты ${selectClub.name}`}>
                <div className={Style.contactsContent}>
                  <span>{selectClub.contacts.address}</span>
                  <a href={`tel:${selectClub.contacts.phone}`}>
                    {selectClub.contacts.phone}
                  </a>
                  <Link
                    target="_blank"
                    to={selectClub.contacts.instagram}
                    className={Style.socialLink}
                  >
                    <Iinstagram />
                  </Link>
                  <Button
                    appearance={"primary"}
                    isFullWidth={false}
                    onClick={() => {
                      dispatch(modalActions.setContent(selectClub.contacts));
                      dispatch(modalActions.toggleModal("book"));
                    }}
                  >
                    Забронировать
                  </Button>
                </div>
              </Expand>
              <NeonStrip color="yellow" marginBottom="50px" />
            </div>
          ))}
        </div>
      </div>
      {isShowModal && <Modal type={"book"} />}
    </>
  );
};
