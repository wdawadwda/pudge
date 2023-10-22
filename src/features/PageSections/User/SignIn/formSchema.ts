import { type FormField } from "./SignIn.type";

export const authFormSchema: FormField[] = [
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
];
