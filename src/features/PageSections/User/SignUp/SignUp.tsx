import { regValidYup } from "~/entities/const/validation";

import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm, FieldErrors } from "react-hook-form";

import { regFormSchema } from "./formSchema";
import Style from "./signUp.module.scss";
import Styles from "../../pageSections.module.scss";

type FormErrors = FieldErrors<{
  email: string;
  password: string;
  passwordConfirmation: string;
}>;

export const SignUp = () => {
  const {
    formState: { errors, isValid, isDirty },
    handleSubmit,
    register,
  } = useForm<FormErrors>({
    mode: "onChange",
    resolver: yupResolver(regValidYup),
  });

  const onSubmit = (data) => {
    // Обработка отправки формы
  };

  return (
    <div
      className={classNames({
        [Style.SignUpContainer]: true,
        [Styles.Container]: true,
      })}
    >
      <div
        className={classNames({
          [Style.SignUpContent]: true,
          [Styles.Content]: true,
        })}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {regFormSchema.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              <input
                type={field.type}
                id={field.name}
                placeholder={field.placeholder}
                {...register(
                  field.name as "email" | "password" | "passwordConfirmation"
                )}
              />
              {errors[field.name] && (
                <p className="error">{errors[field.name].message}</p>
              )}
            </div>
          ))}
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};
