import { links } from "~/router/Links";

export const footerNavSchema = [
  { to: links.userAgreement, label: "Пользовательское соглашение" },

  { to: links.rules, label: "Правила клубов" },
  { to: links.hostingEvent, label: "Мероприятия" },
  { to: links.price, label: "Цены" },
  { to: links.contacts, label: "Контакты" },
  { to: links.about, label: "О нас" },
];
