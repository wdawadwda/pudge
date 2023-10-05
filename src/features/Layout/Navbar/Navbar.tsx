import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useToggle } from "~/entities/hooks/useToggle";
import { links } from "~/router/Links";
import { selectUser } from "~/store/user/user.selectors";

import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { LogoComponent } from "./Logo/LogoComponent";
import Style from "./navbar.module.scss";
import { NavMenu } from "./NavMenu/NavMenu";

export const Navbar = () => {
  const [isOpen, toggleMenu] = useToggle();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleRedirect = () => {
    if (user) {
      navigate(links.account);
    } else {
      navigate(links.login);
    }
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
