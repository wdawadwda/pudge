import { useNavigate } from "react-router-dom";

import { redirectTo } from "~/entities/utils/navigate.utils";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

import Style from "./amminMenu.module.scss";

export const AdminMenu = () => {
  const navigate = useNavigate();

  return (
    <div className={Style.AdminBtnContainer}>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminClub)}
      >
        Управление клубами
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminPartners)}
      >
        Управление партнёрами
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminGallery)}
      >
        Управление галереей
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminNews)}
      >
        Управление новостями
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminMainMap)}
      >
        Управление картой
      </Button>
    </div>
  );
};
