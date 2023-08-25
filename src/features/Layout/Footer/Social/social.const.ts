import { ReactComponent as Iinstagram } from "~/assets/social/instagram.svg";
import { ReactComponent as Mail } from "~/assets/social/mail.svg";
import { ReactComponent as Telegram } from "~/assets/social/telegram.svg";
import { ReactComponent as VK } from "~/assets/social/vk.svg";
import { socialLinks } from "~/router/Links";

export const socialLinksData = [
  { to: socialLinks.instagram, icon: Iinstagram },
  { to: socialLinks.vk, icon: VK },
  { to: socialLinks.telegram, icon: Telegram },
  { to: socialLinks.mail, icon: Mail },
];
