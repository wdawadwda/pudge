import { Link } from "react-router-dom";

import Logo from "~/assets/logo/logo.png";
import { links } from "~/router/Links";

import Style from "../navbar.module.scss";

export const LogoComponent = () => {
  return (
    <Link to={links.home} className={Style.logoWrapper}>
      <img className={Style.logo} src={Logo} alt="logo" />
      <div className={Style.logoText}>
        <span>pudge.by</span>
        <span>cyber club</span>
      </div>
    </Link>
  );
};
