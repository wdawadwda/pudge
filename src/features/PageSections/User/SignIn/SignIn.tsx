import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { authValidYup } from "~/entities/const/validation";
import { Loader } from "~/pages/Loader/Loader";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { createTokens } from "~/store/api/userApi";
import { useAppDispatch } from "~/store/store.types";
import { selectError, selectTokensStatus } from "~/store/user/user.selectors";

import { authFormSchema } from "./formSchema";
import { type FormField } from "./SignIn.type";
import { MessForm } from "../../MessagesForm/MessForm";
import Styles from "../../pageSections.module.scss";
import StylesUser from "../user.module.scss";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const error = useSelector(selectError);
  const currentUser = useSelector(selectTokensStatus);

  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(authValidYup),
  });

  const onClick = () => {
    const { email, password, username } = getValues() as {
      email: string;
      password: string;
      username: string;
    };
    void dispatch(createTokens({ email, password, username }));
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
        {currentUser === "loading" ? (
          <Loader
            loaderWidth="100%"
            loaderHeight="100%"
            dotSize="30px"
            loaderMargin="0 0 77px 0"
          />
        ) : (
          <h2>Login:</h2>
        )}
        {currentUser === "error" ? (
          <MessForm
            message={{ detail: error?.detail || "" }}
            status={currentUser}
          />
        ) : null}
        <form>
          {authFormSchema.map((field: FormField) => (
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
          <Link to={links.reg}>Ещё не аккаунта? Зарегестрируйтесь</Link>
          <Button
            type="button"
            onClick={onClick}
            disabled={!isValid || !isDirty}
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
