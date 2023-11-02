import { type FormField } from "./AddСomputers.type";

export const addComputersFormSchema: FormField[] = [
  {
    label: "Название клуба",
    placeholder: "Введите название клуба",
    name: "name",
    type: "text",
  },
  {
    label: "Сomfort",
    placeholder: "Введите кол-во, можно 0",
    name: "comfort",
    type: "text",
  },
  {
    label: "VIP",
    placeholder: "Введите кол-во, можно 0",
    name: "vip",
    type: "text",
  },
  {
    label: "Bootcamp",
    placeholder: "Введите кол-во, можно 0",
    name: "bootcamp",
    type: "text",
  },
  {
    label: "PS",
    placeholder: "Введите кол-во, можно 0",
    name: "ps",
    type: "text",
  },
];
