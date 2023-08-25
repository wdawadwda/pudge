import { Link } from "react-router-dom";

import { footerNavSchema } from "./footerNav.const";
import Style from "./footerNav.module.scss";

export const FooterNav = () => {
  return (
    <div className={Style.footerNav}>
      {footerNavSchema.map((link, index) => (
        <Link key={index} to={link.to} className={Style.link}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};
