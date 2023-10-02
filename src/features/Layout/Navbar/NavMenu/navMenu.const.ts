import { links } from "~/router/Links";

export const mainLinksSchema = [
  { to: links.about, label: "О нас" },
  { to: links.clubs, label: "Всё о кубах" },
  { to: links.contacts, label: "Контакты" },
];

export const moreLinksSchema = [
  { to: links.news, label: "Новости" },
  { to: links.gallery, label: "Галерея" },
  { to: links.events, label: "Мероприятия" },
];
