import { NavLink } from "react-router-dom";

import { mainLinksSchema, moreLinksSchema } from "./navMenu.const";
import Style from "../navbar.module.scss";
export const NavMenu = () => {
  return (
    <nav className={Style.nav}>
      {mainLinksSchema.map((link) => (
        <NavLink key={link.to} to={link.to} className={Style.navLink}>
          {link.label}
        </NavLink>
      ))}
      <span className={Style.moreLinksWrapper}>
        <a className={Style.moreLinks}>Ещё</a>
        <div className={Style.moreLinksDropdown}>
          {moreLinksSchema.map((link) => (
            <NavLink key={link.to} to={link.to} className={Style.navLink}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </span>
    </nav>
  );
};
