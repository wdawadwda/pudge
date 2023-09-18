import classNames from "classnames";
import { Link } from "react-router-dom";

import { clubData } from "~/entities/const/clubsContent.const";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

import Style from "./clubsH.module.scss";
import Styles from "../../pageSections.module.scss";

export const ClubsH = () => {
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
            <Link
              to={`${links.clubs}/${club.id}`}
              className={Style.itemWrapper__item}
              key={index}
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
              <Button appearance={"primary"}>Забронировать</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
