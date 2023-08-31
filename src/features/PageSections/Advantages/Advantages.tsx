import { faChair, faSteam, faGlobe, faKeyboard, faTv, faGamepad, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import Style from "./advantages.module.scss";
import Styles from "../pageSections.module.scss";

export const Advantages = () => {
  return (
    <div
      className={`${classNames({
        [Style.advantagesContainer]: true,
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.advantagesContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <h2>У нас вы найдёте:</h2>
        <div className={Style.itemWrapper}>
          <div className={Style.advantagesItem}>
            <FontAwesomeIcon icon={faTv} />
            <h3>МОЩНЫЕ И ГРАМОТНО НАСТРОЕННЫЕ ИГРОВЫЕ ПК</h3>
          </div>
          <div className={Style.advantagesItem}>
            <FontAwesomeIcon icon={faChair} />
            <h3>УДОБНЫЕ РЕГУЛИРУЕМЫЕ КРЕСЛА</h3>
          </div>
          <div className={Style.advantagesItem}>
            <FontAwesomeIcon icon={faGlobe} />
            <h3>КАЧЕСТВЕННЫЙ ИНТЕРНЕТ С НИЗКИМ ПИНГОМ</h3>
          </div>
          <div className={Style.advantagesItem}>
            <FontAwesomeIcon icon={faKeyboard} />
            <h3>ФЛАГМАНСКИЕ ИГРОВЫЕ ДЕВАЙСЫ</h3>
          </div>
          <div className={Style.advantagesItem}>
            <FontAwesomeIcon icon={faGamepad} />
            <h3>ЛИЦЕНЗИОННЫЕ ИГРЫ И ПРИСТАВКИ</h3>
          </div>
          <div className={Style.advantagesItem}>
            <FontAwesomeIcon icon={faTrophy} />
            <h3>КИБЕРСПОРТИВНЫЕ ТУРНИРЫ</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
