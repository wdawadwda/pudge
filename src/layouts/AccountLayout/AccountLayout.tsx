import classNames from "classnames";
import { Outlet } from "react-router-dom";

import Styles from "~/features/PageSections/pageSections.module.scss";

export const AccountLayout = () => {
  return (
    <>
      <div
        className={`${classNames({
          [Styles.Container]: true,
        })}`}
      >
        <div
          className={`${classNames({
            [Styles.Content]: true,
          })}`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};
