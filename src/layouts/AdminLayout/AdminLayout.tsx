import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Outlet, useNavigate } from "react-router-dom";

import { goBack } from "~/entities/utils/navigate.utils";
import Styles from "~/features/PageSections/pageSections.module.scss";
import { Button } from "~/shared/ui/Button/Buttons";

import Style from "./adminLayout.module.scss";

export const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${classNames({
          [Styles.Container]: true,
          [Style.ContainerAdminLayout]: true,
        })}`}
      >
        <div
          className={`${classNames({
            [Styles.Content]: true,
            [Style.ContentAdminLayout]: true,
          })}`}
        >
          <Button appearance="secondary" onClick={() => goBack(navigate)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Outlet />
        </div>
      </div>
    </>
  );
};
