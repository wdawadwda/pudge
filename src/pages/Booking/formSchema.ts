import { type FormField } from "./booking.type";

export const bookingFormSchema: FormField[] = [
  {
    label: "Ваше имя",
    placeholder: "Введите ваше имя",
    name: "name",
    type: "text",
  },
  {
    label: "Телефон",
    placeholder: "+375 (XX) XXX-XX-XX",
    name: "phone_number",
    type: "text",
  },
  {
    label: "Ваш телеграмм",
    placeholder: "@username (опционально)",
    name: "telegram",
    type: "text",
  },
  {
    label: "Дата",
    placeholder: "Выберите дату и время",
    name: "time",
    type: "datetime-local",
  },
  {
    label: "Тариф",
    placeholder: "Выберите тариф",
    name: "tariff",
    type: "select",
    options: ["vip", "comfort", "bootcamp"],
  },
  {
    label: "Кол-во мест",
    placeholder: "Кол-во мест",
    name: "quantity_seats",
    type: "text",
  },
];
