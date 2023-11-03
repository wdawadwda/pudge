import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Modal } from "~/features/Modal/Modal";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { selectClubDataResults } from "~/store/content/content.selectors";
import { selectIsShowModal, selectModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";
import { selectUser } from "~/store/user/user.selectors";

import Style from "./clubsH.module.scss";
import Styles from "../../pageSections.module.scss";

export const ClubsH = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const isShowModal = useSelector(selectIsShowModal);
  const clubData = useSelector(selectClubDataResults);
  const user = useSelector(selectUser);

  return (
    <div
      className={`${classNames({
        [Style.ClubsHContainer]: true,
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.ClubsHContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <h2>Наши клубы:</h2>
        <div className={Style.itemWrapper}>
          {clubData && clubData.length > 0 ? (
            clubData.map((club, index) => (
              <div key={index}>
                {user && user.is_staff === true ? (
                  <Button
                    appearance={"primary"}
                    isFullWidth={true}
                    style={{ marginBottom: "10px" }}
                    onClick={() => {
                      dispatch(
                        modalActions.setContent({
                          id: club.id,
                          name: club.name,
                          contacts: club.contacts,
                        })
                      );
                      dispatch(modalActions.toggleModal("dellClub"));
                    }}
                  >
                    Удалить
                  </Button>
                ) : null}
                <Link
                  to={`${links.clubs}/${club.id}`}
                  className={Style.itemWrapper__item}
                >
                  <img src={club.img} alt="" />
                  <h3>{`${club.name}:`}</h3>
                  <p>{club.contacts.address}</p>
                  <p>{club.contacts.phone}</p>
                  <ul>
                    {" "}
                    Кол-во компьютеров:
                    <li>
                      VIP{" "}
                      <strong>
                        {club.quantityComputers.vip === 0
                          ? "—"
                          : club.quantityComputers.vip}
                      </strong>
                    </li>
                    <li>
                      Comfort{" "}
                      <strong>
                        {club.quantityComputers.comfort === 0
                          ? "—"
                          : club.quantityComputers.comfort}
                      </strong>
                    </li>
                    <li>
                      Bootcamp{" "}
                      <strong>
                        {club.quantityComputers.bootcamp === 0
                          ? "—"
                          : club.quantityComputers.bootcamp}
                      </strong>
                    </li>
                    <li>
                      PS5{" "}
                      <strong>
                        {club.quantityComputers.ps === 0
                          ? "—"
                          : club.quantityComputers.ps}
                      </strong>
                    </li>
                  </ul>
                </Link>
                <Button
                  appearance={"primary"}
                  isFullWidth={true}
                  onClick={() => {
                    dispatch(
                      modalActions.setContent({
                        contacts: club.contacts,
                        name: club.name,
                        id: club.id,
                      })
                    );
                    dispatch(modalActions.toggleModal("book"));
                  }}
                >
                  Забронировать
                </Button>
              </div>
            ))
          ) : (
            <>
              <div></div>
              <ServerResponse message={""} error={"Кажется тут пусто"} />
            </>
          )}
        </div>
      </div>
      {isShowModal && modal.modalType !== null && (
        <Modal type={modal.modalType} />
      )}
    </div>
  );
};
