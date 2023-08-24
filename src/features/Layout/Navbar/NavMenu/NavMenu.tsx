import { NavLink } from "react-router-dom";

import { mainLinks, moreLinks } from "./navMenu.const";
import Style from "../navbar.module.scss";
export const NavMenu = () => {
  return (
    <nav className={Style.nav}>
      {mainLinks.map((link) => (
        <NavLink key={link.to} to={link.to} className={Style.navLink}>
          {link.label}
        </NavLink>
      ))}
      <span className={Style.moreLinksWrapper}>
        <a className={Style.moreLinks}>Ещё</a>
        <div className={Style.moreLinksDropdown}>
          {moreLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={Style.navLink}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </span>
    </nav>
  );
};
