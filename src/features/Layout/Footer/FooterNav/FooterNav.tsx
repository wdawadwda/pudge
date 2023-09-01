import { NavLink } from "react-router-dom";

import { footerNavSchema } from "./footerNav.const";
import Style from "./footerNav.module.scss";

export const FooterNav = () => {
  return (
    <div className={Style.footerNav}>
      {footerNavSchema.map((link, index) => (
        <NavLink key={index} to={link.to} className={Style.link}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};
