import { type FormField } from "./addNews.type";

export const addNewsFormSchema: FormField[] = [
  {
    label: "Заголовок",
    placeholder: "Введите название заголовок",
    name: "title",
    type: "text",
  },

  {
    label: "Картинку",
    placeholder: "Загрузите картинку для новости",
    name: "img",
    type: "file",
  },
  {
    label: "Текст",
    placeholder: "Введите первый абзац",
    name: "text1",
    type: "textarea",
  },
  {
    label: "Текст",
    placeholder: "Введите второй абзац",
    name: "text2",
    type: "textarea",
  },
  {
    label: "Текст",
    placeholder: "Введите третий абзац",
    name: "text3",
    type: "textarea",
  },
];
