import { useEffect, useRef, useState } from "react";

import { type AxiosError } from "axios";
import classNames from "classnames";
import { useParams } from "react-router-dom";

import { useRedirect } from "~/entities/hooks/useRedirect";
import {
  type EmailConfirmRequest,
  type ErrorConfirm,
} from "~/entities/type/api.type";
import { Loader } from "~/pages/Loader/Loader";
import { links } from "~/router/Links";
import { emailConfirmation } from "~/store/api/userApi";

import { MessForm } from "../../MessagesForm/MessForm";
import Styles from "../../pageSections.module.scss";
import StylesUser from "../user.module.scss";

export const Success = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const [detailMessage, setDetailMessage] = useState({
    defaultAxios: "",
    detail: "",
    successMessage: "",
  });

  const { uid, token } = useParams<{ uid: string; token: string }>();
  const emailConfirmReference = useRef(false);
  useEffect(() => {
    if (
      !emailConfirmReference.current &&
      uid !== undefined &&
      token !== undefined
    ) {
      const confirmData: EmailConfirmRequest = { uid, token };
      setStatus("loading");
      emailConfirmReference.current = true;
      emailConfirmation(confirmData)
        .then(() => {
          setStatus("success");
          setDetailMessage({
            ...detailMessage,
            defaultAxios: "",
            detail: "",
            successMessage: "Подтверждение прошло успешно",
          });
        })
        .catch((error: unknown) => {
          const axiosError = error as AxiosError<ErrorConfirm>;
          setStatus("error");
          const errorMessage = axiosError.response?.data;
          const defaultMessage = axiosError.message;
          if (errorMessage !== undefined) {
            setDetailMessage({
              ...detailMessage,
              defaultAxios: defaultMessage,
              detail: errorMessage.detail || "",
              successMessage: "",
            });
          }
          console.error(error);
        });
    } else {
      console.error("uid или token отсутствуют или имеют неверный тип");
    }
  }, [uid, token, detailMessage]);

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
