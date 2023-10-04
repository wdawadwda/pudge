import { useToggle } from "~/entities/hooks/useToggle"; 
import { links } from "~/router/Links";

import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import LogoComponent from "./LogoComponent";
import Style from "./Navbar.module.scss";
import NavMenu from "./NavMenu";

export const Navbar = () => {
  const [isOpen, toggleMenu] = useToggle();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(links.reg);
  };

  return (
    <>
      <div className={Style.containerNavbar}>
        <div className={Style.navbarContent}>
          <LogoComponent />
          <NavMenu />
          <div className={Style.user}>
            <FontAwesomeIcon
              className={Style.user}
              icon={faUser}
              onClick={handleRedirect}
            />
          </div>
          <div className={Style.burger} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <BurgerMenu isMenuOpen={isOpen} onCloseMenu={toggleMenu} />
    </>
  );
};
