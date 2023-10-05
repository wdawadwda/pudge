import * as yup from "yup";

export const emailValidSchema = yup.object({
  email: yup
    .string()
    .required("Это обязательное поле")
    .matches(/^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/, "Некорректный email"),
});

export const passwordValidSchema = yup.object({
  password: yup
    .string()
    .required("Введите пароль")
    .min(8, "Минимальная длина пароля - 8 символов")
    .matches(/[A-Za-zЁА-яё]/, "Пароль должен содержать хотя бы одну букву")
    .matches(
      /[A-ZЁА-Я]/,
      "Пароль должен содержать хотя бы одну заглавную букву"
    )
    .matches(/[a-zа-яё]/, "Пароль должен содержать хотя бы одну строчную букву")
    .matches(/\d/, "Пароль должен содержать хотя бы одну цифру"),
});

export const usernameValidSchema = yup.object({
  username: yup
    .string()
    .required("Это обязательное поле")
    .min(3, "Минимальная длина 3 символа"),
});

export const passwordConfirmationSchema = yup.object({
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать")
    .required("Введите подтверждение пароля"),
});

export const regValidYup = yup
  .object()
  .shape({
    email: emailValidSchema.fields.email,
    password: passwordValidSchema.fields.password,
    passwordConfirmation:
      passwordConfirmationSchema.fields.passwordConfirmation,
    username: usernameValidSchema.fields.username,
  })
  .required();

export const authValidYup = yup
  .object()
  .shape({
    email: emailValidSchema.fields.email,
    password: passwordValidSchema.fields.password,
    username: usernameValidSchema.fields.username,
  })
  .required();
