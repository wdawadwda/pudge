import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  name: yup
    .string()
    .required('Поле "Ваше имя" обязательно для заполнения')
    .min(2, "Имя должно содержать как минимум 2 символа"),
  phone_number: yup
    .string()
    .required('Поле "Телефон" обязательно для заполнения')
    .matches(
      /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
      "Введите в формате +375 (XX) XXX-XX-XX",
    ),
  telegram: yup.string().notRequired(),
  time: yup
    .string()
    .required('Поле "Время" обязательно для заполнения')
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]) (0\d|1\d|2[0-3]):[0-5]\d$/,
      {
        message: "Введите время в формате ММ/ДД ЧЧ:ММ",
      },
    ),
  tariff: yup
    .string()
    .required("Поле обязательно для заполнения")
    .oneOf(
      ["vip", "bootcamp", "comfort", "Vip", "Bootcamp", "Comfort"],
      `Поле может быть только "vip", "bootcamp" или "comfort"`,
    ),
  quantity_seats: yup
    .number()
    .required('Поле "Кол-во мест" обязательно для заполнения')
    .integer("Введите целое число"),
});
