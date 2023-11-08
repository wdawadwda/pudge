import { AxiosError } from "axios";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Status, EmailConfirmRequest, ErrorConfirm } from "~/entities/type/api.type";
import { emailConfirmation } from "~/store/api/userApi";

export const useEmailConfirmation = () => {
  const [status, setStatus] = useState<Status>("idle");
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
  }, [uid, token]);

  return { status, detailMessage };
};
