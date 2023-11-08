import classNames from "classnames";

import { useRedirect } from "~/entities/hooks/useRedirect";
import { Loader } from "~/pages/Loader/Loader";
import { links } from "~/router/Links";

import { MessForm } from "../../MessagesForm/MessForm";
import Styles from "../../pageSections.module.scss";
import StylesUser from "../user.module.scss";
import { useEmailConfirmation } from "./useEmailConfirmation";

export const Success = () => {
  const { status, detailMessage } = useEmailConfirmation();

  useRedirect(links.login, 3000, status, links.reg);

  return (
    <div
      className={classNames({
        [Styles.Container]: true,
        [StylesUser.UserContainer]: true,
      })}
    >
      <div
        className={classNames({
          [Styles.Content]: true,
          [StylesUser.UserContent]: true,
        })}
      >
        {status === "loading" ? (
          <Loader
            loaderWidth="100%"
            loaderHeight="100%"
            dotSize="30px"
            loaderMargin="0 0 77px 0"
          />
        ) : (
          <h2>Подтверждение регистрации:</h2>
        )}
        {status === "success" || status === "error" ? (
          <MessForm message={detailMessage} status={status} />
        ) : null}
      </div>
    </div>
  );
};
