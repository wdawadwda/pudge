import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { redirectTo } from "~/entities/utils/navigate.utils";
import Styles from "~/features/PageSections/pageSections.module.scss";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { selectUser } from "~/store/user/user.selectors";
import { userActions } from "~/store/user/user.slice";

import Style from "./account.module.scss";

export const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(userActions.logout());
    window.location.reload();
  };

  return (
    <>
      {user && (
        <div
          className={classNames({
            [Styles.Container]: true,
            [Style.AccountContainer]: true,
          })}
        >
          <div
            className={classNames({
              [Styles.Content]: true,
              [Style.AccountContent]: true,
            })}
          >
            <h2>Привет {user.username}</h2>
            {user.is_staff === true ? (
              <Button
                isFullWidth={true}
                appearance="primary"
                onClick={() => redirectTo(navigate, links.admin)}
              >
                Управление Сайтом
              </Button>
            ) : (
              <span>{`Скоро мы добавим новые функции :)`}</span>
            )}
            <Button isFullWidth={true} appearance="primary" onClick={Logout}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
