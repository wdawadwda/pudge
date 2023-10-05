import { type FormField } from "./SignUp.type";

export const regFormSchema: FormField[] = [
  {
    label: "Электронная почта",
    placeholder: "Введите ваш email",
    name: "email",
    type: "email",
  },
  {
    label: "Имя пользователя",
    placeholder: "Введите ваше имя пользователя",
    name: "username",
    type: "text",
  },
  {
    label: "Пароль",
    placeholder: "Введите пароль",
    name: "password",
    type: "password",
  },
  {
    label: "Подтверждение пароля",
    placeholder: "Повторите пароль",
    name: "passwordConfirmation",
    type: "password",
  },
];
