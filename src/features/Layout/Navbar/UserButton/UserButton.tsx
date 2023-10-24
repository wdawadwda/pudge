import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { links } from "~/router/Links";
import { selectUser } from "~/store/user/user.selectors";

import Style from "../navbar.module.scss";

export const UserButton = () => {
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
      <div className={classNames(Style.user, { [Style.userActive]: user })}>
        <FontAwesomeIcon
          className={classNames(Style.user, { [Style.userActive]: user })}
          icon={faUser}
          onClick={handleRedirect}
        />
      </div>
    </>
  );
};
