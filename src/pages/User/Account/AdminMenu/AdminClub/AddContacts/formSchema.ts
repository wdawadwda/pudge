import { type FormField } from "./addContacts.type";

export const addContactsFormSchema: FormField[] = [
  {
    label: "Название клуба",
    placeholder: "Введите название клуба",
    name: "name",
    type: "text",
  },
  {
    label: "Адрес клуба",
    placeholder: "Введите адрес клуба",
    name: "address",
    type: "text",
  },
  {
    label: "Телефон",
    placeholder: "Введите телефон клуба",
    name: "phone",
    type: "text",
  },
  {
    label: "Instagram",
    placeholder: "Введите ссылку",
    name: "instagram",
    type: "text",
  },
  {
    label: "Email",
    placeholder: "Введите email",
    name: "email",
    type: "text",
  },
];
