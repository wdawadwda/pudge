import { type FormField } from "./addClub.type";

export const addClubFormSchema: FormField[] = [
  {
    label: "Название клуба",
    placeholder: "Введите название клуба",
    name: "name",
    type: "text",
  },
  {
    label: "Карта",
    placeholder: "Вставьте src из яндекс карт",
    name: "map",
    type: "text",
  },
  {
    label: "Фото клуба",
    placeholder: "Загрузите фото клуба",
    name: "img",
    type: "file",
  },
];
