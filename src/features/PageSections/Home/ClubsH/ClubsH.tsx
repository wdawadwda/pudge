import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clubData } from "~/entities/const/clubsContent.const";
import { Modal } from "~/features/Modal/Modal";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { selectIsShowModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";

import Style from "./clubsH.module.scss";
import Styles from "../../pageSections.module.scss";

export const ClubsH = () => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);

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
          {clubData.map((club, index) => (
            <div key={index}>
              <Link
                to={`${links.clubs}/${club.id}`}
                className={Style.itemWrapper__item}
              >
                <img src={club.img} alt="" />
                <h3>{`${club.name}:`}</h3>
                <p>{club.address}</p>
                <p>{club.phone}</p>
                <ul>
                  {" "}
                  Кол-во компьютеров:
                  <li>
                    VIP{" "}
                    <strong>
                      {club.quantityСomputers.vip === 0
                        ? "—"
                        : club.quantityСomputers.vip}
                    </strong>
                  </li>
                  <li>
                    Comfort{" "}
                    <strong>
                      {club.quantityСomputers.comfort === 0
                        ? "—"
                        : club.quantityСomputers.comfort}
                    </strong>
                  </li>
                  <li>
                    PS5{" "}
                    <strong>
                      {club.quantityСomputers.ps === 0
                        ? "—"
                        : club.quantityСomputers.ps}
                    </strong>
                  </li>
                </ul>
              </Link>
              <Button
                appearance={"primary"}
                isFullWidth={true}
                onClick={() => dispatch(modalActions.toggleModal())}
              >
                Забронировать
              </Button>
            </div>
          ))}
        </div>
      </div>
      {isShowModal && <Modal type={"book"} />}
    </div>
  );
};
