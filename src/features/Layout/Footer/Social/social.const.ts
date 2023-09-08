import { ReactComponent as Iinstagram } from "~/assets/social/instagram.svg";
import { ReactComponent as Telegram } from "~/assets/social/telegram.svg";
import { ReactComponent as Tiktok } from "~/assets/social/tiktok.svg";
import { ReactComponent as VK } from "~/assets/social/vk.svg";
import { socialLinks } from "~/router/Links";

export const socialLinksData = [
  { to: socialLinks.instagram, icon: Iinstagram },
  { to: socialLinks.vk, icon: VK },
  { to: socialLinks.telegram, icon: Telegram },
  { to: socialLinks.tiktok, icon: Tiktok },
];
