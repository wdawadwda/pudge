import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "~/shared/ui/Button/Buttons";
import { selectUser } from "~/store/user/user.selectors";
import { userActions } from "~/store/user/user.slice";

import Style from "./account.module.scss";
import Styles from "../../pageSections.module.scss";

export const AccountS = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onClick = () => {
    dispatch(userActions.logout());
    window.location.reload();
    return null;
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
            <span>{`Скоро мы добавим новые функции :)`}</span>
            <Button isFullWidth={true} appearance="primary" onClick={onClick}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
