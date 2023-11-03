import { useNavigate } from "react-router-dom";

import { redirectTo } from "~/entities/utils/navigate.utils";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

import Style from "../amminMenu.module.scss";

export const AdminClub = () => {
  const navigate = useNavigate();
  return (
    <div className={Style.AdminBtnContainer}>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminClubAdd)}
      >
        Добавить клуб
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminClubAddContacts)}
      >
        Добавить контакты клуба
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminClubAddComputer)}
      >
        Добавить компьютеры по тарифам
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminClubAddPrice)}
      >
        Добавить цены
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminClubAddSpec)}
      >
        Добавить информацию о железе
      </Button>
    </div>
  );
};
