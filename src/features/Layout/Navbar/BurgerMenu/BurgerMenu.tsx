import { Link } from "react-router-dom";

import Style from "./burger.module.scss";
import { menuLinksSchema } from "./burgerMeny,const";

export const BurgerMenu = ({
  isMenuOpen,
  onCloseMenu,
}: {
  isMenuOpen: boolean;
  onCloseMenu: () => void;
}) => {
  if (!isMenuOpen) {
    return null;
  }

  return (
    <nav className={Style.nav}>
      {menuLinksSchema.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={Style.navLink}
          onClick={onCloseMenu}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
