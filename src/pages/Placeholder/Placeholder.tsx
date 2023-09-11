import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from "./placeholder.module.scss";

export const Placeholder = () => {
  return (
    <div className={Style.container}>
      <FontAwesomeIcon icon={faPersonDigging} />
      <h3>Пока тут ничего нет</h3>
      <h3>Но мы уже работаем</h3>
    </div>
  );
};
