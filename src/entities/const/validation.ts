import * as yup from "yup";

export const emailValidSchema = yup.object({
  email: yup
    .string()
    .required("Это обязательное поле")
    .email("Некорректный email"),
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

export const passwordConfirmationSchema = yup
  .object()
  .shape({
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Пароли должны совпадать")
      .required("Введите подтверждение пароля"),
  })
  .required();

export const regValidYup = yup
  .object()
  .shape({
    ...emailValidSchema.fields,
    ...passwordValidSchema.fields,
    ...passwordConfirmationSchema.fields,
  })
  .required();

export const authValidYup = yup
  .object()
  .shape({
    ...emailValidSchema.fields,
    ...passwordValidSchema.fields,
  })
  .required();
