import { Link } from "react-router-dom";

import Logo from "~/assets/logo/logo.png";
import { links } from "~/router/Links";

import Style from "./footer.module.scss";
import { FooterNav } from "./FooterNav/FooterNav";
import { Social } from "./Social/Social";

export const Footer = () => {
  return (
    <div className={Style.containeFooter}>
      <div className={Style.footerContent}>
        <Link to={links.home} className={Style.logo}>
          <img src={Logo} alt="logo" />
        </Link>
        <FooterNav />
        <Social />
      </div>
    </div>
  );
};
