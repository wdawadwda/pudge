import { type FormField } from "./AddPartner.type";

export const addPartnerFormSchema: FormField[] = [
  {
    label: "Название",
    placeholder: "Введите название",
    name: "name",
    type: "text",
  },
  {
    label: "Url",
    placeholder: "Введите ссылку на сайт",
    name: "url",
    type: "text",
  },
  {
    label: "Фото",
    placeholder: "Загрузите фото",
    name: "img",
    type: "file",
  },
];
