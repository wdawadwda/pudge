import { links } from "~/router/Links";

export const footerNavSchema = [
  { to: links.clientAgreement, label: "Пользовательское соглашение" },
  { to: links.rules, label: "Правила клубов" },
  { to: links.events, label: "Мероприятия" },
  { to: links.contacts, label: "Контакты" },
  { to: links.about, label: "О нас" },
];
