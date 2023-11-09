import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from "./placeholder.module.scss";

export const Placeholder = () => {
  return (
    <div className={Style.container}>
      <FontAwesomeIcon icon={faPersonDigging} />
      <h3>Ведутся</h3>
      <h3>Технические работы</h3>
    </div>
  );
};
