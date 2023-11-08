import classNames from "classnames";
import { Link } from "react-router-dom";

import { Loader } from "~/pages/Loader/Loader";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

import { regFormSchema } from "./formSchema";
import { useSignUpForm } from "./useSignUpForm";
import { MessForm } from "../../MessagesForm/MessForm";
import Styles from "../../pageSections.module.scss";
import StylesUser from "../user.module.scss";

export const SignUp = () => {
  const {
    status,
    detailMessage,
    register,
    errors,
    isValid,
    isDirty,
    onSignUp,
  } = useSignUpForm();

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
