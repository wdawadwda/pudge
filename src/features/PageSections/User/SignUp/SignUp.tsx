import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { type AxiosError } from "axios";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { regValidYup } from "~/entities/const/validation";
import {
  type ErrorDetailSignUp,
  type SignUpApiRequest,
} from "~/entities/type/api.type";
import { Loader } from "~/pages/Loader/Loader";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { registerUser } from "~/store/api/userApi";

import { regFormSchema } from "./formSchema";
import { MessForm } from "../../MessagesForm/MessForm";
import Styles from "../../pageSections.module.scss";
import StylesUser from "../user.module.scss";

export const SignUp = () => {
  const [status, setStatus] = useState("idle");
  const [detailMessage, setDetailMessage] = useState({
    defaultAxios: "",
    username: "",
    email: "",
    password: "",
    successMessage: "",
  });

  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(regValidYup),
  });

  const onSignUp = () => {
    const { email, password, username } = getValues() as SignUpApiRequest;
    const userData = { email, password, username };
    setStatus("loading");

    registerUser(userData)
      .then(() => {
        setStatus("success");
        setDetailMessage({
          ...detailMessage,
          defaultAxios: "",
          email: "",
          password: "",
          username: "",
          successMessage: "Проверьте вашу почту",
        });
      })
      .catch((error: unknown) => {
        const axiosError = error as AxiosError<ErrorDetailSignUp>;
        setStatus("error");
        const errorMessage = axiosError.response?.data;
        const defaultMessage = axiosError.message;
        if (errorMessage !== undefined) {
          setDetailMessage({
            ...detailMessage,
            defaultAxios: defaultMessage,
            email: errorMessage.email || "",
            password: errorMessage.password || "",
            username: errorMessage.username || "",
            successMessage: "",
          });
        }
      });
  };

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
        {" "}
        {status === "loading" ? (
          <Loader
            loaderWidth="100%"
            loaderHeight="100%"
            dotSize="30px"
            loaderMargin="0 0 77px 0"
          />
        ) : (
          <h2>Sign-Up:</h2>
        )}
        <form>
          {status === "success" || status === "error" ? (
            <MessForm message={detailMessage} status={status} />
          ) : null}
          {regFormSchema.map((field) => (
            <div key={field.name}>
              <div>
                <label
                  className={
                    errors[field.name]
                      ? StylesUser.errorText
                      : isValid
                      ? StylesUser.validText
                      : ""
                  }
                >
                  {field.label}
                </label>
                <input
                  className={
                    errors[field.name]
                      ? StylesUser.errorBg
                      : isValid
                      ? StylesUser.validBG
                      : ""
                  }
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                />
              </div>
              <span>{errors[field.name]?.message || "\u00A0"}</span>
            </div>
          ))}
          <Link to={links.login}>Есть аккаунт? Login</Link>
          <Button
            type="button"
            onClick={onSignUp}
            disabled={status === "loading" || !isValid || !isDirty}
            appearance="primary"
            isFullWidth={true}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
};
