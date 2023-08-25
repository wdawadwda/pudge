import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useToggle } from "~/entities/hooks/useToggle";

import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { LogoComponent } from "./Logo/LogoComponent";
import Style from "./navbar.module.scss";
import { NavMenu } from "./NavMenu/NavMenu";

export const Navbar = () => {
  const [isOpen, toggleMenu] = useToggle();

  return (
    <>
      <div className={Style.containerNavbar}>
        <div className={Style.navbarContent}>
          <LogoComponent />
          <NavMenu />
          <div className={Style.burger} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <BurgerMenu isMenuOpen={isOpen} onCloseMenu={toggleMenu} />
    </>
  );
};
