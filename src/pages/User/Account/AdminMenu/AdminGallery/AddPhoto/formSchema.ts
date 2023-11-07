import { type FormField } from "./addPhoto.type";

export const addPhotoFormSchema: FormField[] = [
  {
    label: "Название клуба",
    placeholder: "Введите название клуба",
    name: "name",
    type: "text",
  },
  {
    label: "Фото",
    placeholder: "Загрузите",
    name: "img",
    type: "file",
  },
  {
    label: "Текст",
    placeholder: "Введите подпись для фото",
    name: "text",
    type: "text",
  },
];
