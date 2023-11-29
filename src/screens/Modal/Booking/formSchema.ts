import { type FormField } from "./booking.type";

export const bookingFormSchema: FormField[] = [
  {
    label: "Ваше имя:",
    placeholder: "Введите ваше имя",
    name: "name",
    type: "text",
  },
  {
    label: "Телефон:",
    placeholder: "+375 (XX) XXX-XX-XX",
    name: "phone_number",
    type: "text",
  },
  {
    label: "Телеграмм (опционально):",
    placeholder: "@username или https://t.me/username",
    name: "telegram",
    type: "text",
  },
  {
    label: "Дата:",
    placeholder: "ММ/ДД ЧЧ:ММ",
    name: "time",
    type: "text",
  },
  {
    label: "Тариф:",
    placeholder: "vip, comfort, bootcamp",
    name: "tariff",
    type: "text",
  },
  {
    label: "Кол-во мест:",
    placeholder: "Кол-во мест",
    name: "quantity_seats",
    type: "text",
  },
];
