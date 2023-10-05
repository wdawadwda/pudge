import Style from "./messForm.module.scss";
import { type MessFormProperties } from "./messForm.type";

export const MessForm = ({ message, status }: MessFormProperties) => {
  return (
    <div className={`${Style.mesWrap} ${Style[status]}`}>
      {message.defaultAxios && (
        <span className={`${Style.text} ${Style[status]}`}>
          {message.defaultAxios}
        </span>
      )}
      {message.username && (
        <span className={`${Style.text} ${Style[status]}`}>
          Имя пользователя: {message.username}
        </span>
      )}
      {message.email && (
        <span className={`${Style.text} ${Style[status]}`}>
          email: {message.email}
        </span>
      )}
      {message.password && (
        <span className={`${Style.text} ${Style[status]}`}>
          Пароль: {message.password}
        </span>
      )}
      {message.successMessage && (
        <span className={`${Style.text} ${Style[status]}`}>
          {message.successMessage}
        </span>
      )}
      {message.detail && (
        <span className={`${Style.text} ${Style[status]}`}>
          {message.detail}
        </span>
      )}
    </div>
  );
};
