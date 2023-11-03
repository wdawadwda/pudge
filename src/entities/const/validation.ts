import * as yup from "yup";

export const emailValidSchema = yup.object({
  email: yup
    .string()
    .required("Это обязательное поле")
    .matches(/^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/, "Некорректный email"),
});

export const passwordValidSchema = yup.object({
  password: yup
    .string()
    .required("Введите пароль")
    .min(8, "Минимальная длина пароля - 8 символов")
    .matches(/[A-Za-zЁА-яё]/, "Пароль должен содержать хотя бы одну букву")
    .matches(
      /[A-ZЁА-Я]/,
      "Пароль должен содержать хотя бы одну заглавную букву"
    )
    .matches(/[a-zа-яё]/, "Пароль должен содержать хотя бы одну строчную букву")
    .matches(/\d/, "Пароль должен содержать хотя бы одну цифру"),
});

export const usernameValidSchema = yup.object({
  username: yup
    .string()
    .required("Это обязательное поле")
    .min(3, "Минимальная длина 3 символа"),
});

export const passwordConfirmationSchema = yup.object({
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать")
    .required("Введите подтверждение пароля"),
});

export const regValidYup = yup
  .object()
  .shape({
    email: emailValidSchema.fields.email,
    password: passwordValidSchema.fields.password,
    passwordConfirmation:
      passwordConfirmationSchema.fields.passwordConfirmation,
    username: usernameValidSchema.fields.username,
  })
  .required();

export const authValidYup = yup
  .object()
  .shape({
    email: emailValidSchema.fields.email,
    password: passwordValidSchema.fields.password,
    username: usernameValidSchema.fields.username,
  })
  .required();

export const addClubSchema = yup.object().shape({
  name: yup.string().required("Название клуба обязательно"),
  map: yup.string().required("Карта обязательна"),
  img: yup
    .mixed()
    .test("fileType", "Фото клуба должно быть изображением", (value) => {
      if (value instanceof FileList && value.length === 1) {
        const acceptedImageTypes = ["image/jpeg", "image/png"];
        const fileType = value[0].type;
        return acceptedImageTypes.includes(fileType);
      }
      return false;
    })
    .required("Фото клуба обязательно"),
});

export const addContactsSchema = yup.object().shape({
  name: yup
    .string()
    .required('Поле "Название клуба" обязательно для заполнения'),
  email: yup
    .string()
    .required("Это обязательное поле")
    .matches(/^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/, "Некорректный email"),
  address: yup
    .string()
    .required('Поле "Адрес клуба" обязательно для заполнения'),
  phone: yup.string().required('Поле "Телефон" обязательно для заполнения'),
  instagram: yup
    .string()
    .required('Поле "Instagram" обязательно для заполнения'),
});

export const addComputersSchema = yup.object().shape({
  name: yup.string().required("Название клуба обязательно"),
  comfort: yup
    .string()
    .required("Количество компьютеров в комфорт-зоне обязательно"),
  vip: yup.string().required("Количество компьютеров в VIP-зоне обязательно"),
  bootcamp: yup
    .string()
    .required("Количество компьютеров в Bootcamp-зоне обязательно"),
  ps: yup.string().required("Количество приставок обязательно"),
});

export const addSpecSchema = yup.object().shape({
  name: yup.string().required("Поле обязательно для заполнения"),
  onePosition: yup.string(),
  onePositionDescr: yup.string(),
  twoPosition: yup.string(),
  twoPositionDescr: yup.string(),
  threePosition: yup.string(),
  threePositionDescr: yup.string(),
  fourPosition: yup.string(),
  fourPositionDescr: yup.string(),
  fivePosition: yup.string(),
  fivePositionDescr: yup.string(),
  sixPosition: yup.string(),
  sixPositionDescr: yup.string(),
  sevenPosition: yup.string(),
  sevenPositionDescr: yup.string(),
  eightPosition: yup.string(),
  eightPositionDescr: yup.string(),
  tariff: yup
    .string()
    .required("Поле обязательно для заполнения")
    .oneOf(
      ["vip", "bootcamp", "comfort"],
      `Поле может быть только "vip", "bootcamp" или "comfort"`
    ),
});

export const addPriceschema = yup.object().shape({
  name: yup.string().required("Поле обязательно для заполнения"),
  tariff: yup
    .string()
    .required("Поле обязательно для заполнения")
    .oneOf(
      ["vip", "bootcamp", "comfort"],
      `Поле может быть только "vip", "bootcamp" или "comfort"`
    ),
  oneRowOneСel: yup.string(),
  oneRowTwoСel: yup.string(),
  oneRowTwoСelDesc: yup.string(),
  oneRowThreeСel: yup.string(),
  oneRowThreeСelDesc: yup.string(),
  twoRowOneСel: yup.string(),
  twoRowTwoСel: yup.string(),
  twoRowTwoСelDesc: yup.string(),
  twoRowThreeСel: yup.string(),
  twoRowThreeСelDesc: yup.string(),
  threeRowOneСel: yup.string(),
  threeRowTwoСel: yup.string(),
  threeRowTwoСelDesc: yup.string(),
  threeRowThreeСel: yup.string(),
  threeRowThreeСelDesc: yup.string(),
  fourRowOneСel: yup.string(),
  fourRowTwoСel: yup.string(),
  fourRowTwoСelDesc: yup.string(),
  fourRowThreeСel: yup.string(),
  fourRowThreeСelDesc: yup.string(),
  fiveRowOneСel: yup.string(),
  fiveRowTwoСel: yup.string(),
  fiveRowTwoСelDesc: yup.string(),
  fiveRowThreeСel: yup.string(),
  fiveRowThreeСelDesc: yup.string(),
  DescrOne: yup.string(),
  DescrTwo: yup.string(),
  DescrThree: yup.string(),
  DescrFour: yup.string(),
  DescrFive: yup.string(),
  section: yup.string(),
});

export const addPhotoSchema = yup.object().shape({
  name: yup.string().required("Название клуба обязательно для заполнения"),
  text: yup.string().required("Обязательно для заполнения"),
  img: yup
    .mixed()
    .test("fileType", "Фото клуба должно быть изображением", (value) => {
      if (value instanceof FileList && value.length === 1) {
        const acceptedImageTypes = ["image/jpeg", "image/png"];
        const fileType = value[0].type;
        return acceptedImageTypes.includes(fileType);
      }
      return false;
    })
    .required("Фото обязательно"),
});

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
      "Номер телефона должен соответствовать формату +375 (XX) XXX-XX-XX"
    ),
  telegram: yup.string().notRequired(),
  time: yup
    .string()
    .required('Поле "Время" обязательно для заполнения')
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]) (0\d|1\d|2[0-3]):[0-5]\d$/,
      {
        message: "Введите корректное время в формате ММ/ДД ЧЧ:ММ",
      }
    ),

  quantity_seats: yup
    .number()
    .required('Поле "Кол-во мест" обязательно для заполнения')
    .integer("Введите целое число"),
});

export const addPartnerFormValidationSchema = yup.object().shape({
  name: yup.string().required("Название обязательно"),
  url: yup
    .string()
    .required("URL обязателен")
    .url('Введите корректный URL (например, "http://www.example.com")'),
  img: yup
    .mixed()
    .test("fileType", "Фото должно быть изображением", (value) => {
      if (value instanceof FileList && value.length === 1) {
        const acceptedImageTypes = ["image/jpeg", "image/png"];
        const fileType = value[0].type;
        return acceptedImageTypes.includes(fileType);
      }
      return false;
    })
    .required("Фото обязательно"),
});

export const removeGalleryValidationSchema = yup.object().shape({
  name: yup.string().required("Это поле обязательно"),
});

export const addMainMapSchema = yup.object().shape({
  url: yup
    .string()
    .required("URL обязателен")
    .url('Введите корректный URL (например, "http://www.example.com")'),
});

export const addNewsSchema = yup.object().shape({
  title: yup.string().required("Заголовок обязателен"),
  img: yup
    .mixed()
    .test("fileType", "Фото клуба должно быть изображением", (value) => {
      if (value instanceof FileList && value.length === 1) {
        const acceptedImageTypes = ["image/jpeg", "image/png"];
        const fileType = value[0].type;
        return acceptedImageTypes.includes(fileType);
      }
      return false;
    })
    .required("Фото клуба обязательно"),
  text1: yup.string().required("Первое поле обязателено"),
  text2: yup.string(),
  text3: yup.string(),
});
